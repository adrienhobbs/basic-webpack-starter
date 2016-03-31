[![Build Status](https://travis-ci.org/adrienhobbs/basic-webpack-starter.svg?branch=master)](https://travis-ci.org/adrienhobbs/basic-webpack-starter)
[![devDependency Status](https://david-dm.org/adrienhobbs/basic-webpack-starter/dev-status.svg)](https://david-dm.org/adrienhobbs/basic-webpack-starter#info=devDependencies)

# Webpack & PostCSS Starter Kit
—
This is a work in progress.

A starter kit I use to begin new projects. Easily setup a webpack environment.

PostCSS plugins available out of the box are:
* postcss-font-magician
* postcss-normalize
* postcss-center
* postcss-cssnext
* lost-grid

This kit uses both css & sass-loaders, so both will be watched and built accordingly.

---

##Getting Started
---

First install all dependencies:

```sh
npm install
```

Start a webpack dev server by running:

```sh
npm start
```

To build your project run:

```sh
npm build
```

All html files in 'src/templates/' will be added to the build process automatically.
