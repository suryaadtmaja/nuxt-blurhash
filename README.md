# nuxt-blurhash

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

>

[📖 **Release Notes**](./CHANGELOG.md)

this project based on [https://github.com/damienroche/vue-blurhash](https://github.com/damienroche/vue-blurhash)

## Setup

1. Add `nuxt-blurhash` dependency to your project

```bash
yarn add nuxt-blurhash # or npm install nuxt-blurhash
```

2. Add `nuxt-blurhash` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-blurhash'
  ]
}
```

## Simple usage

```vue
<template>
  <nuxt-blur-image
    width="400"
    height="300"
    src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max"
    hash="LFC$yHwc8^$yIAS$%M%00KxukYIp"
    alt="A man drinking a coffee."
  />
</template>
```

## Use Canvas only

````vue
<template>
  <nuxt-blurhash
    :hash="'LdHfL}oJR$WBKnfi%3ofT0kCM{ay'"
    :width="'340'"
    :height="'320'"
    :punch="punch"
  />
</template>
```


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-blurhash/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-blurhash [npm-downloads-src]:
https://img.shields.io/npm/dt/nuxt-blurhash.svg [npm-downloads-href]:
https://npmjs.com/package/nuxt-blurhash [github-actions-ci-src]:
https://github.com//workflows/ci/badge.svg [github-actions-ci-href]:
https://github.com//actions?query=workflow%3Aci [codecov-src]:
https://img.shields.io/codecov/c/github/.svg [codecov-href]:
https://codecov.io/gh/ [license-src]:
https://img.shields.io/npm/l/nuxt-blurhash.svg [license-href]:
https://npmjs.com/package/nuxt-blurhash

