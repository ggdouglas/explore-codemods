import {
  API,
  ASTPath,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
} from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const anchorButtons = root.findJSXElements("AnchorButton");
  const buttons = root.findJSXElements("Button");
  const buttonGroups = root.findJSXElements("ButtonGroup");

  anchorButtons.forEach((path) => transform(j, path));
  buttons.forEach((path) => transform(j, path));
  buttonGroups.forEach((path) => transform(j, path));

  return root.toSource();
}

function transform(j: JSCodeshift, path: ASTPath<JSXElement>) {
  const minimalAttr = findAttribute(j, path, "minimal");
  const outlinedAttr = findAttribute(j, path, "outlined");

  // both  minimal and outlined are present
  if (minimalAttr.length > 0 && outlinedAttr.length > 0) {
    const outlinedValue = outlinedAttr.get().value.value.expression.value;
    const minimalValue = minimalAttr.get().value.value.expression.value;

    if (outlinedValue) {
      transformToVariantAttribute(j, outlinedAttr.get(), "outlined");
      j(minimalAttr.get()).remove();
    } else if (minimalValue) {
      transformToVariantAttribute(j, minimalAttr.get(), "minimal");
      j(outlinedAttr.get()).remove();
    }
    return;
  }
  if (minimalAttr.length > 0) {
    transformToVariantAttribute(j, minimalAttr.get(), "minimal");
  } else if (outlinedAttr.length > 0) {
    transformToVariantAttribute(j, outlinedAttr.get(), "outlined");
  }
}

function findAttribute(
  j: JSCodeshift,
  path: ASTPath<JSXElement>,
  name: string
) {
  return j(path).find(j.JSXAttribute, {
    name: { type: "JSXIdentifier", name },
  });
}

function transformToVariantAttribute(
  j: JSCodeshift,
  path: ASTPath<JSXAttribute>,
  variant: string
) {
  const attributeValue = path.value.value;

  // case 1: attribute is set without a boolean value (e.g. `outlined`)
  if (attributeValue == null) {
    path.value.name = j.jsxIdentifier("variant");
    path.value.value = j.stringLiteral(variant);
    return;
  }

  if (attributeValue.type === "JSXExpressionContainer") {
    const expression = attributeValue.expression;

    // case 2: attribute is set with a boolean value (e.g. `minimal={true}` or `outlined={true}`)
    if (expression.type === "BooleanLiteral" && expression.value === true) {
      path.value.name = j.jsxIdentifier("variant");
      path.value.value = j.stringLiteral(variant);
      return;
    } else if (
      expression.type === "BooleanLiteral" &&
      expression.value === false
    ) {
      j(path).remove();
      return;
    }

    // case 3: attribute is set with an expression (e.g. `minimal={isMinimal}` or `outlined={isOutlined}`)
    if (expression.type !== "JSXEmptyExpression") {
      path.value.name = j.jsxIdentifier("variant");
      path.value.value = j.jsxExpressionContainer(
        j.conditionalExpression(
          expression,
          j.stringLiteral(variant),
          j.stringLiteral("solid")
        )
      );
      return;
    }
  }

  // case 4: attribute is set with something else (e.g. `minimal={false}` or `outlined={false}`)
  j(path).remove();
}
