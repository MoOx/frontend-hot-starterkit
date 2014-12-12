# Frontend Hot StarterKit

> Frontend app with **hot reload / React / cssnext**.

---

- If you want to try this boilerplate, you can clone this repository directly.
- If you want to start a similar project, take a look at the end of this README

---

## [Requirements](REQUIREMENTS.md)

## Install dependencies

```console
$ npm install
```

## Build the app for production

```console
$ npm run build
```

## Start app & watch changes

```console
$ npm run server
```

## Start tests & watch changes

```console
$ npm run server-test
```

_Note: you can run both app & test server at the same time ;)_

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

```console
$ git pull
$ npm prune
$ npm install
```

**Note:** Unix user can just link the `git-hooks/post-merge`:

## Enable git hooks (unix only :/)

```console
$ git-hooks/create-hook-symlinks
```

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Languages & tools

### JavaScript / JSX

- [ESlint](http://www.jshint.com/docs/) is used to prevent JavaScript errors.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [cssnext](http://cssnext.github.io/) is used to write future-proof CSS.

### Development tools

- Launcher: [npm scripts](https://www.npmjs.org/doc/misc/npm-scripts.html)
- Build tool + dev server: [webpack](http://webpack.github.io/)
- Tests (in browsers): [testem](https://github.com/airportyh/testem) + [tape](https://github.com/substack/tape).

---

## Start a similar project

Create a directory with a `package.json` with this content

```json
{
  "private": true,
  "name": "my-project",
  "version": "0.0.0",
  "scripts": {
    "start": "npm run server",
    "jscs": "jsxcs .",
    "eslint": "eslint . --ext=.js --ext=.jsx",
    "lint": "npm run eslint && npm run jscs",
    "pretest-ci": "npm run build-test",
    "test-ci": "testem ci",
    "pretest": "npm run lint",
    "test": "npm run build && npm run test-ci",
    "prebuild-test": "npm run lint",
    "build-test": "node scripts/build-test",
    "build": "webpack -p -c",
    "server": "node scripts/server",
    "server-test": "testem"
  },
  "dependencies": {

  },
  "devDependencies": {

  }
}
```

You should install versions of dependencies manually to start with up to date versions:

```console
$ npm i -D 6to5 6to5-loader css-loader cssnext-loader yannickcr/eslint#deezer file-loader glob jscs jsx-loader jsxcs onchange opn react-hot-loader style-loader tape testem webpack webpack-dev-server
$ npm i -S react
```

You should get this README & delete the first & last section (the notice about this section & this section, yes).
You can also copy everything except the `package.json`.
