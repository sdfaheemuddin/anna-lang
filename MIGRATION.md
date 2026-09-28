# Bhai Lang → Anna Lang

Anna Lang now uses its own parser, interpreter, CLI command and syntax highlighting. The original Bhai Lang project and MIT attribution remain credited.

## Source changes

Rename source files from `.bhai` to `.anna` and replace language keywords as follows. Keep quoted strings and comments unchanged unless you want to translate their text.

| Bhai Lang | Anna Lang |
| --- | --- |
| `hi bhai` | `hi anna` |
| `bye bhai` | `bye anna` |
| `bhai ye hai` | `anna idi` |
| `bol bhai` | `anna cheppu` |
| `agar bhai` | `okavela anna` |
| `nahi to bhai` | `lekapothe anna` |
| `warna bhai` | `kakapothe anna` |
| `jab tak bhai` | `anna eppudu varaku` |
| `bas kar bhai` | `chalu anna` |
| `agla dekh bhai` | `veredi chudu anna` |
| `sahi` | `nijam` |
| `galat` | `tappu` |
| `nalla` | `kali` |

Old keywords are not aliases. The existing behavior of ignoring text outside the program delimiters remains unchanged.

## Build and run from this repository

```sh
npm ci
npm run build
npm test
node packages/cli/bin/index.js examples/hello.anna
```

To install the newly built CLI locally:

```sh
npm install -g ./packages/cli
annalang examples/hello.anna
```

The CLI returns a nonzero exit code for missing files, syntax errors and runtime errors.

## JavaScript API

Workspace imports change from `bhai-lang-parser` / `bhai-lang-interpreter` to `anna-lang-parser` / `anna-lang-interpreter`.

```ts
import interpreter from "anna-lang-interpreter";

interpreter.interpret('hi anna anna cheppu "Hello World"; bye anna');
```

Parser internals now use `AnnaLangModule`, `annaLangSpec`, Anna token identifiers and `KaliPointerException`. Update direct imports of the old internals accordingly.

## Release and website

This change does not publish npm packages. Build and verify the packages before publishing the renamed parser, interpreter and CLI. `npm i -g annalang` will only deliver this migration after a new CLI release is published.

The documentation export is configured for `https://sdfaheemuddin.github.io/anna-lang/`. The upstream `bhailang.js.org` CNAME has been removed. The site becomes available when GitHub Pages and the existing deployment workflow are configured successfully for this repository.
