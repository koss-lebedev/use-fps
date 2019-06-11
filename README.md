# use-fps [![version](https://img.shields.io/npm/v/use-fps.svg)](https://www.npmjs.com/package/use-fps) [![minified size](https://img.shields.io/bundlephobia/min/use-fps.svg)](https://www.npmjs.com/package/use-fps) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-fps.svg)](https://www.npmjs.com/package/use-fps) [![downloads](https://img.shields.io/npm/dt/use-fps.svg)](https://www.npmjs.com/package/use-fps)

React hook for display FPS (frame per second) value. This hook is useful for testing performance of your animations.

## Install

* `npm install use-fps` or
* `yarn add use-fps`

## Usage

```js
import useFPS from 'use-fps'

const SomeComponent = () => {
  const fps = useFPS()

  return (
    <div>{fps}</div>
  )
}
```
