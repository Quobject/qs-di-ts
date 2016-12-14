# Dependency Injection for Typescript
Lightweight wrap of [di.js](https://github.com/angular/di.js) for TypeScript.

[![NPM](https://nodei.co/npm/qs-di-ts.png?downloads=true&downloadRank=true)](https://nodei.co/npm/qs-di-ts/)
[![NPM](https://nodei.co/npm-dl/qs-di-ts.png?months=6&height=3)](https://nodei.co/npm/qs-di-ts/)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]


## Install
````bash
npm install qs-di-ts
````

## Usage
 
You need to use 

```
 "emitDecoratorMetadata": true,
 "experimentalDecorators": true,
 ```

when compiling typescript files. 

### car.ts
```typescript
import {Inject} from 'qs-di-ts'
import {Engine} from './engine'

@Inject
export class Car {
  constructor(public engine: Engine) {}
}
```

### engine.ts
```typescript
export class Engine {

}
```

### mockEngine.ts
```typescript
import {Provide} from 'qs-di-ts'
import {Engine} from './engine'

@Provide(Engine)
export class MockEngine {

}
```

### main.ts
```typescript

import {Injector} from 'qs-di-ts'
import {Car} from './car'
import {Engine} from './engine'

var injector = new Injector();
var car: Car = injector.get(Car); //instantiate car, car.engine is magically instance of Engine! :)


import {MockEngine} from './mockEngine'
var injector2 = new Injector([MockEngine]);
var car2: Car = injector2.get(Car); //instantiate car, car.engine is instance of MockEngine! :)
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/qs-di-ts.svg?style=flat
[npm-url]: https://npmjs.org/package/qs-di-ts
[downloads-image]: https://img.shields.io/npm/dm/qs-di-ts.svg?style=flat
[downloads-url]: https://npmjs.org/package/qs-di-ts