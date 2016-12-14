/* tslint:disable:no-shadowed-variable */
/* tslint:disable:no-unused-variable */
import  * as test from 'blue-tape';

import { Inject, Provide, Injector } from './index';

export class Engine {
}

export class Doors {
}

@Inject
export class Car {
  constructor(public engine: Engine, public doors: Doors) { }
}

@Provide(Engine)
export class MockEngine {
}

test('di.ts', t => {

  t.test('should instantiate a class without dependencies', t => {

    const injector = new Injector();
    const engine: Engine = injector.get(Engine);

    t.true(engine instanceof Engine);
    t.end();
  });

  t.test('should instantiate a class with dependency', t => {
    const injector = new Injector();
    const car: Car = injector.get(Car);

    t.true(car instanceof Car);
    t.true(car.engine instanceof Engine);
    t.end();
  });

  t.test('should instantiate a class with multiple dependencies', t => {
    const injector = new Injector();
    const car: Car = injector.get(Car);


    t.true(car instanceof Car);
    t.true(car.engine instanceof Engine);
    t.true(car.doors instanceof Doors);
    t.end();
  });

  t.test('should instantiate a class with mocked dependency', t => {
    const injector = new Injector([MockEngine]);
    const car: Car = injector.get(Car);

    t.true(car instanceof Car);
    t.true(car.engine instanceof MockEngine);
    t.end();
  });


});

