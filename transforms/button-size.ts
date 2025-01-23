import { API, ASTPath, FileInfo, JSCodeshift, JSXAttribute } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const buttons = root.findJSXElements("Button");

  const smallAttributes = buttons.find(j.JSXAttribute, {
    name: { type: "JSXIdentifier", name: "small" },
  });
  smallAttributes.forEach((path) => transformSmallAttribute(j, path));

  const largeAttributes = buttons.find(j.JSXAttribute, {
    name: { type: "JSXIdentifier", name: "large" },
  });
  largeAttributes.forEach((path) => transformLargeAttribute(j, path));

  return root.toSource();
}

function transformSmallAttribute(j: JSCodeshift, path: ASTPath<JSXAttribute>) {
  const attributeValue = path.value.value;

  // case 1: small is set without a boolean value (e.g. `small`)
  if (attributeValue == null) {
    // rename from "small" to size="small"
    path.value.name = j.jsxIdentifier("size");
    path.value.value = j.stringLiteral("small");
    return;
  }

  // case 2: small is set with a boolean value (e.g. `small={true}`)
  if (attributeValue.type === "JSXExpressionContainer") {
    const expression = attributeValue.expression;
    if (expression.type === "BooleanLiteral" && expression.value === true) {
      // rename from "small={true}" to size="small"
      path.value.name = j.jsxIdentifier("size");
      path.value.value = j.stringLiteral("small");
      return;
    }
  }

  // case 3: small is set with something else (e.g. `small={false}`)
  j(path).remove();
}

function transformLargeAttribute(j: JSCodeshift, path: ASTPath<JSXAttribute>) {
  const attributeValue = path.value.value;

  // case 1: large is set without a boolean value (e.g. `large`)
  if (attributeValue == null) {
    // rename from "large" to size="large"
    path.value.name = j.jsxIdentifier("size");
    path.value.value = j.stringLiteral("large");
    return;
  }

  // case 2: large is set with a boolean value (e.g. `large={true}`)
  if (attributeValue.type === "JSXExpressionContainer") {
    const expression = attributeValue.expression;
    if (expression.type === "BooleanLiteral" && expression.value === true) {
      // rename from "large={true}" to size="large"
      path.value.name = j.jsxIdentifier("size");
      path.value.value = j.stringLiteral("large");
      return;
    }
  }

  // case 3: large is set with something else (e.g. `large={false}`)
  j(path).remove();
}
