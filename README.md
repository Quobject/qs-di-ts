# Dependency Injection for Typescript
Lightweight wrap and extension of [di.js](https://github.com/angular/di.js) for TypeScript.
forked from https://github.com/VaclavObornik/di-ts

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


