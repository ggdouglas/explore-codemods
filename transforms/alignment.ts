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
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
} from "jscodeshift";

// https://github.com/facebook/jscodeshift/issues/534

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  /**
   * Change the following:
   * <NavbarGroup align={Alignment.LEFT} />
   * <NavbarGroup align={Alignment.RIGHT} />
   * <NavbarGroup align={Alignment.CENTER} />
   *
   * to:
   * <NavbarGroup align={Alignment.START} />
   * <NavbarGroup align={Alignment.END} />
   * <NavbarGroup />
   */

  const navbarGroups = root.findJSXElements("NavbarGroup");

  const alignProps = navbarGroups.find(j.JSXAttribute, {
    name: { name: "align" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "MemberExpression",
        object: { name: "Alignment" },
      },
    },
  });

  alignProps.forEach((path) => {
    const attributeValue = path.value.value;
    if (attributeValue.type === "JSXExpressionContainer") {
      const { expression } = attributeValue;
      if (expression.type === "MemberExpression") {
        const { property } = expression;
        if (property.type === "Identifier") {
          const { name } = property;
          if (name === "LEFT") {
            property.name = "START";
          } else if (name === "RIGHT") {
            property.name = "END";
          } else if (name === "CENTER") {
            j(path).remove();
          }
        }
      }
    }
  });

  /**
   * Change the following:
   * <NavbarGroup align="left" />
   * <NavbarGroup align="right" />
   * <NavbarGroup align="center" />
   *
   * to:
   * <NavbarGroup align="start" />
   * <NavbarGroup align="end" />
   * <NavbarGroup />
   */

  const stringAlignProps = navbarGroups.find(j.JSXAttribute, {
    name: { name: "align" },
    value: { type: "StringLiteral" },
  });

  stringAlignProps.forEach((path) => {
    const attributeValue = path.value.value;
    if (attributeValue.type === "StringLiteral") {
      const { value } = attributeValue;
      if (value === "left") {
        path.value.value = j.stringLiteral("start");
      } else if (value === "right") {
        path.value.value = j.stringLiteral("end");
      } else if (value === "center") {
        j(path).remove();
      }
    }
  });

  /**
   * Change the following:
   * <NavbarGroup align={"left"} />
   * <NavbarGroup align={"right"} />
   * <NavbarGroup align={"center"} />
   *
   * to:
   * <NavbarGroup align={"start"} />
   * <NavbarGroup align={"end"} />
   * <NavbarGroup />
   */

  const stringAlignProps2 = navbarGroups.find(j.JSXAttribute, {
    name: { name: "align" },
    value: { type: "JSXExpressionContainer" },
  });

  stringAlignProps2.forEach((path) => {
    const attributeValue = path.value.value;

    if (attributeValue.type === "JSXExpressionContainer") {
      const { expression } = attributeValue;
      if (expression.type === "StringLiteral") {
        const { value } = expression;
        if (value === "left") {
          expression.value = "start";
        } else if (value === "right") {
          expression.value = "end";
        } else if (value === "center") {
          j(path).remove();
        }
      }
    }
  });

  return root.toSource();
}
