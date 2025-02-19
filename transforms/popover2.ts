import { API, FileInfo, ImportDeclaration } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Step 1: Replace all Tooltip2 instances with Tooltip
  root
    .find(j.JSXIdentifier, { name: "Tooltip2" })
    .replaceWith(() => j.jsxIdentifier("Tooltip"));

  // Step 2: Update import statements in @blueprintjs/core
  const blueprintCoreImport = root.find(j.ImportDeclaration, {
    source: { value: "@blueprintjs/core" },
  });

  blueprintCoreImport
    .find(j.ImportSpecifier, { imported: { name: "Tooltip2" } })
    .remove();

  blueprintCoreImport.forEach((path) => {
    const node = path.node as ImportDeclaration;
    const hasTooltip = node.specifiers?.some(
      (specifier) =>
        specifier.type === "ImportSpecifier" &&
        specifier.imported.name === "Tooltip"
    );

    if (!hasTooltip) {
      node.specifiers?.push(j.importSpecifier(j.identifier("Tooltip")));
    }
  });

  // Step 3: Remove Tooltip2 from @blueprintjs/popover2 import
  root
    .find(j.ImportDeclaration, { source: { value: "@blueprintjs/popover2" } })
    .forEach((path) => {
      const node = path.node as ImportDeclaration;
      const specifiers = node.specifiers || [];

      // Remove Tooltip2 specifier if it exists
      node.specifiers = specifiers.filter(
        (specifier) =>
          !(
            j.ImportSpecifier.check(specifier) &&
            specifier.imported.name === "Tooltip2"
          )
      );

      // If no specifiers remain, remove the entire import statement
      if (node.specifiers.length === 0) {
        j(path).remove();
      }
    });

  return root.toSource();
}
