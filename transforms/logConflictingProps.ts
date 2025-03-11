import { API, ASTPath, FileInfo, JSCodeshift, JSXElement } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const anchorButtons = root.findJSXElements("AnchorButton");
  const buttons = root.findJSXElements("Button");
  const buttonGroups = root.findJSXElements("ButtonGroup");

  anchorButtons.forEach((path) => checkAndLog(j, path, file.path));
  buttons.forEach((path) => checkAndLog(j, path, file.path));
  buttonGroups.forEach((path) => checkAndLog(j, path, file.path));

  // Return unmodified source
  return root.toSource();
}

function checkAndLog(
  j: JSCodeshift,
  path: ASTPath<JSXElement>,
  filePath: string
) {
  const minimalAttr = findAttribute(j, path, "minimal");
  const outlinedAttr = findAttribute(j, path, "outlined");
  const classNameAttr = findAttribute(j, path, "className");

  // Skip if any of the required attributes are missing
  if (
    minimalAttr.length === 0 ||
    outlinedAttr.length === 0 ||
    classNameAttr.length === 0
  ) {
    return;
  }

  // Check if minimal and outlined are both truthy
  const minimalValue = extractAttributeValue(minimalAttr.get());
  const outlinedValue = extractAttributeValue(outlinedAttr.get());

  if (isTruthy(minimalValue) && isTruthy(outlinedValue)) {
    const elementName = path.get("openingElement").value.name.name;
    const classNameValue =
      classNameAttr.get().value.value.type === "StringLiteral"
        ? classNameAttr.get().value.value.value
        : "expression";

    console.log(`Found in ${filePath}:`);
    console.log(`  Component: ${elementName}`);
    console.log(`  minimal: ${JSON.stringify(minimalValue)}`);
    console.log(`  outlined: ${JSON.stringify(outlinedValue)}`);
    console.log(`  className: ${classNameValue}`);
    console.log("---");
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

function extractAttributeValue(path) {
  const attributeValue = path.value.value;

  // If attribute is present without a value (e.g., `minimal`)
  if (attributeValue == null) {
    return true;
  }

  // If attribute has string literal value
  if (attributeValue.type === "StringLiteral") {
    return attributeValue.value;
  }

  // If attribute has expression container
  if (attributeValue.type === "JSXExpressionContainer") {
    const expression = attributeValue.expression;

    // Handle boolean literals
    if (expression.type === "BooleanLiteral") {
      return expression.value;
    }

    // For other expressions, return the source representation
    return expression;
  }

  return attributeValue;
}

function isTruthy(value) {
  // Handle boolean values directly
  if (typeof value === "boolean") {
    return value;
  }

  // If it's just the attribute with no value, it's truthy
  if (value === true) {
    return true;
  }

  // For expressions, we can't determine truthiness statically
  // Return true if it's not explicitly false
  return value !== false;
}
