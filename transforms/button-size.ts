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

  const buttons = root.findJSXElements("Button");

  buttons.forEach((path) => {
    const smallAttr = findAttribute(j, path, "small");
    const largeAttr = findAttribute(j, path, "large");

    // Both attributes exist - handle conflict, prioritize "small" over "large"
    if (smallAttr.length > 0 && largeAttr.length > 0) {
      transformToSizeAttribute(j, smallAttr.get(), "small");
      j(largeAttr.get()).remove();
      return;
    }
    // Only one attribute exists - handle it
    if (smallAttr.length > 0) {
      transformToSizeAttribute(j, smallAttr.get(), "small");
    } else if (largeAttr.length > 0) {
      transformToSizeAttribute(j, largeAttr.get(), "large");
    }
  });

  return root.toSource();
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

function transformToSizeAttribute(
  j: JSCodeshift,
  path: ASTPath<JSXAttribute>,
  size: string
) {
  const attributeValue = path.value.value;

  // case 1: attribute is set without a boolean value (e.g. `small` or `large`)
  if (attributeValue == null) {
    path.value.name = j.jsxIdentifier("size");
    path.value.value = j.stringLiteral(size);
    return;
  }

  // case 2: attribute is set with a boolean value (e.g. `small={true}` or `large={true}`)
  if (attributeValue.type === "JSXExpressionContainer") {
    const expression = attributeValue.expression;
    if (expression.type === "BooleanLiteral" && expression.value === true) {
      path.value.name = j.jsxIdentifier("size");
      path.value.value = j.stringLiteral(size);
      return;
    }
  }

  // case 3: attribute is set with something else (e.g. `small={false}` or `large={false}`)
  j(path).remove();
}
