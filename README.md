# Explore CodeMods

A repository dedicated to exploring and demonstrating various CodeMod transformations using jscodeshift and other AST transformation tools.

## What are CodeMods?

CodeMods (Code Modifications) are tools that help automate code changes across a large codebase. They're particularly useful for:

- Updating deprecated API usage
- Enforcing coding standards
- Migrating between different versions of libraries
- Performing large-scale refactoring

### Installation

```bash
npm install
```

### Usage

To run a codemod transformation:

```bash
npx jscodeshift -t <transform-file> <path-to-files>
```

### Testing

To run tests:

```bash
npm test
```
