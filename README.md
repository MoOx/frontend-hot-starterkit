# Frontend Hot StarterKit

Frontend app with **hot reload / React / cssnext**.

## [Requirements](REQUIREMENTS.md)

## Install

```console
$ git clone https://github.com/MoOx/frontend-hot-starterkit
$ cd frontend-hot-starterkit
$ npm i
```

## Start & watch

```console
$ npm start
```

## Simple build for production

```console
$ npm run build
```

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
$ npm run create-hook-symlinks
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
    "prestart": "npm i",
    "start": "npm run server",
    "jscs": "jsxcs .",
    "eslint": "eslint . --ext=.js --ext=.jsx",
    "lint": "npm run --silent eslint && npm run --silent jscs",
    "build": "webpack",
    "server": "node scripts/server",
    "build-test": "node scripts/build-test",
    "pretest": "npm run lint --silent && npm run --silent build-test",
    "test": "testem ci"
  },
  "dependencies": {

  },
  "devDependencies": {

  }
}
```

You should install latest version of some dependencies to start with recents versions (that why the snippet above doesn't contain any dep version)

```console
$ npm i -D 6to5 6to5-loader css-loader cssnext-loader eslint file-loader gaze glob jscs jsx-loader jsxcs onchange opn react-hot-loader style-loader tape testem webpack webpack-dev-server
$ npm i -S react
```

You should get this README & delete the last section (this one, yes).
You can also copy everything except the `package.json`.
