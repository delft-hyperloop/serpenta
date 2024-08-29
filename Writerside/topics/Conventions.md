# Conventions

Conventions set important rules for the development process that _should_ bring some kind of benefit. Commit, issue or
PR conventions where not present during DH08, but the one below are left for suggestion (and are mostly already used
throughout Serpenta):

-   use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for commit naming
-   use Oxford British English.

## Prettier formatting for TypeScript

The project uses the
[Praxidike prettier configuration](https://github.com/TeamPraxidike/.github/blob/main/.prettierrc.yaml) Of course, feel
free to modify and completely change the Prettier configuration and make a better one.

```yaml
# Prettier configuration
arrowParens: avoid
requirePragma: false
insertPragma: false
proseWrap: always
trailingComma: "none"
tabWidth: 4
semi: true
useTabs: false
singleQuote: false
printWidth: 120
plugins:
    - prettier-plugin-svelte
overrides:
    - files: "*.svelte"
      options:
          parser: svelte
```
