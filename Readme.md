# @caryhu/eslint-config [![npm](https://img.shields.io/npm/v/@caryhu/eslint-config)](https://npmjs.com/package/@caryhu/eslint-config)

Customized with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage

### Install

```bash
npm install -D eslint @caryhu/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@caryhu"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.
### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
