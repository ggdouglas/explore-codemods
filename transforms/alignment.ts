// this codemod handles migrations for the following issue:
// https://github.com/palantir/blueprint/issues/7193

// The following components currently use Alignment.LEFT or Alignment.RIGHT for the `alignIndicator` prop.
// <Checkbox>
// <CheckboxCard>
// <NavbarGroup>
// <Radio>
// <RadioCard>
// <Switch>
// <SwitchCard>

// These components should be updated to use Alignment.START or Alignment.END
// Furthermore, Alignment.CENTER is not valid for these components and shouuld be removed.

// The following components currently use Alignment.LEFT, Alignment.RIGHT, or Alignment.CENTER for the `alignText` prop
// <Button>
// <ButtonGroup>

// These components should be updated to use TextAlignment.START, TextAlignment.END, or TextAlignment.CENTER

// <NavbarGroup> uses Alignment.LEFT, Alignment.RIGHT for the `align` prop.
// Furthermore, Alignment.CENTER is not valid for this component and should be removed.

import {
  API,
  ASTPath,
  Collection,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
} from "jscodeshift";

// https://github.com/facebook/jscodeshift/issues/534

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const navbarGroups = root.findJSXElements("NavbarGroup");

  processNavbarGroups(j, navbarGroups);

  return root.toSource();
}

/**
 * Change the following:
 * <NavbarGroup align={Alignment.LEFT} />
 * <NavbarGroup align={Alignment.RIGHT} />
 * <NavbarGroup align={Alignment.CENTER} />
 * <NavbarGroup align="left" />
 * <NavbarGroup align="right" />
 * <NavbarGroup align="center" />
 * <NavbarGroup align={"left"} />
 * <NavbarGroup align={"right"} />
 * <NavbarGroup align={"center"} />
 *
 * to:
 * <NavbarGroup align={Alignment.START} />
 * <NavbarGroup align={Alignment.END} />
 * <NavbarGroup />
 * <NavbarGroup align="start" />
 * <NavbarGroup align="end" />
 * <NavbarGroup />
 * <NavbarGroup align={"start"} />
 * <NavbarGroup align={"end"} />
 * <NavbarGroup />
 */
function processNavbarGroups(
  j: JSCodeshift,
  navbarGroups: Collection<JSXElement>
) {
  const alignAttributes = navbarGroups.find(j.JSXAttribute, {
    name: { name: "align" },
  });

  alignAttributes.forEach((path) => {
    const attributeValue = path.value.value;
    // Handle JSX attributes that contain expressions like {Alignment.LEFT} or {"left"}
    if (attributeValue.type === "JSXExpressionContainer") {
      const { expression } = attributeValue;

      // Handle member expressions like Alignment.LEFT
      if (expression.type === "MemberExpression") {
        const { property } = expression;
        // Convert identifier names (LEFT/RIGHT/CENTER) to START/END
        if (property.type === "Identifier") {
          convertAlignmentMember(j, path, property);
        }
      }

      // Handle string literals wrapped in curly braces like {"left"}
      if (expression.type === "StringLiteral") {
        convertAlignmentString(j, path, expression);
      }
      // Handle direct string literals like align="left"
    } else if (attributeValue.type === "StringLiteral") {
      convertAlignmentString(j, path, attributeValue);
    }
  });
}

function convertAlignmentMember(
  j: JSCodeshift,
  path: ASTPath,
  property: { name: string }
) {
  const { name } = property;
  if (name === "LEFT") {
    property.name = "START";
  } else if (name === "RIGHT") {
    property.name = "END";
  } else if (name === "CENTER") {
    j(path).remove();
  }
}

function convertAlignmentString(
  j: JSCodeshift,
  path: ASTPath,
  expression: { value: string }
) {
  const { value } = expression;
  if (value === "left") {
    expression.value = "start";
  } else if (value === "right") {
    expression.value = "end";
  } else if (value === "center") {
    j(path).remove();
  }
}
