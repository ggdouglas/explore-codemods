import { API, FileInfo, JSXIdentifier } from "jscodeshift";

// console.log
// Node {
//   type: 'JSXExpressionContainer',
//   start: 122,
//   end: 128,
//   loc: SourceLocation {
//     start: Position { line: 5, column: 23, index: 122, token: 22 },
//     end: Position { line: 5, column: 29, index: 128, token: 25 },
//     filename: undefined,
//     identifierName: undefined,
//     lines: Lines {
//       infos: [Array],
//       mappings: [],
//       cachedSourceMap: null,
//       cachedTabWidth: undefined,
//       length: 7,
//       name: null
//     },
//     tokens: [
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token], [Token], [Token],
//       [Token], [Token]
//     ],
//     indent: 2
//   },
//   expression: Node {
//     type: 'BooleanLiteral',
//     start: 123,
//     end: 127,
//     loc: SourceLocation {
//       start: [Position],
//       end: [Position],
//       filename: undefined,
//       identifierName: undefined,
//       lines: [Lines],
//       tokens: [Array],
//       indent: 2
//     },
//     value: true
//   }
// }

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .findJSXElements("Button")
    .find(j.JSXAttribute, {
      name: {
        type: "JSXIdentifier",
        name: "small",
      },
    })
    .forEach((path) => {
      const attributeValue = path.value.value;

      // case 1: small is set without a boolean value (e.g. `small`)
      if (attributeValue == null) {
        // rename from "small" to size="small"
        path.value.name = j.jsxIdentifier("size");
        path.value.value = j.stringLiteral("small");
        return;
      }

      if (attributeValue.type === "JSXExpressionContainer") {
        const expression = attributeValue.expression;
        if (expression.type === "BooleanLiteral") {
          // case 2: small is set with a boolean value (e.g. `small={true}`)
          if (expression.value === true) {
            // rename from "small={true}" to size="small"
            path.value.name = j.jsxIdentifier("size");
            path.value.value = j.stringLiteral("small");
            return;
          }
        }
      }

      // case 3: small is set with something else (e.g. `small={false}`)
      j(path).remove();
    });

  return root.toSource();
}
