import { API, FileInfo, ImportDeclaration, ImportSpecifier } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all import declarations from @blueprintjs/core
  const blueprintCoreImports = root.find(j.ImportDeclaration, {
    source: { value: "@blueprintjs/core" },
  });

  if (blueprintCoreImports.size() > 1) {
    // Collect all import specifiers
    const specifiers: { specifier: ImportSpecifier; isType: boolean }[] = [];

    blueprintCoreImports.forEach((path) => {
      const node = path.node as ImportDeclaration;
      const isTypeImport = node.importKind === "type";

      node.specifiers?.forEach((specifier) => {
        if (j.ImportSpecifier.check(specifier)) {
          specifiers.push({ specifier, isType: isTypeImport });
        }
      });
    });

    // Remove all existing @blueprintjs/core import declarations
    blueprintCoreImports.remove();

    // Sort specifiers alphabetically
    specifiers.sort((a, b) => {
      const aName = a.specifier.imported.name;
      const bName = b.specifier.imported.name;
      return aName.localeCompare(bName);
    });

    // Create a new import declaration
    const newSpecifiers = specifiers.map(({ specifier, isType }) => {
      const newSpecifier = j.importSpecifier(
        specifier.imported,
        specifier.local
      );
      if (isType) {
        (newSpecifier as any).importKind = "type"; // Cast to any to set importKind
      }
      return newSpecifier;
    });

    const newImportDeclaration = j.importDeclaration(
      newSpecifiers,
      j.literal("@blueprintjs/core")
    );

    // Insert the new import declaration at the position of the first occurrence
    blueprintCoreImports.at(0).insertBefore(newImportDeclaration);
  }

  return root.toSource();
}
