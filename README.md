# Amazevue
[Vue2.0](https://vuejs.org) components for [Amaze UI](https://amazeui.org)

[![npm](https://img.shields.io/npm/v/amazevue.svg)](https://www.npmjs.com/package/amazevue)
[![npm](https://img.shields.io/npm/l/amazevue.svg)](./LICENSE)

## Getting Start

### Install

```shell
$ npm install amazevue
```

### Import to project

As it's a pure Vue.js components, what dependencies required  are only:

+ Vue.js@^2.2.2
+ Amazeui@^2.7.2 **(Only css files are required)**

```javascript
import Vue from 'vue'
import 'amazeui/dist/css/amazeui.css'
import 'amazevue/dist/amazevue.css'
import Amazevue from 'amazevue'

Vue.use(Amazevue)
```

Since we did some modifications on *Amazeui* stylesheets, **you must import *Amazevue* css files AFTER the original css files.**

## Docs

[document](https://tidyzq.github.io/amazevue)

This document is kind of humble😅, so any contributions are welcome

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build module
npm run build

# build module and publish to npm
npm run build --publish

# build document
npm run build-doc

# build document and publish to github pages
npm run build-doc --publish

```

