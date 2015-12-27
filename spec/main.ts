/// <reference path="../typings/tsd.d.ts"/>

import 'expectations'

import {Injector} from '../index'
import {Engine, MockEngine, Car, Doors} from './fixtures'

describe("di.ts", () => {

  it('should instantiate a class without dependencies', () => {
    var injector = new Injector();
    var engine: Engine = injector.get(Engine);

    expect(engine instanceof Engine).toBeTruthy();
  });

  it("should instantiate a class with dependency", () => {
    var injector = new Injector();
    var car: Car = injector.get(Car);

    expect(car instanceof Car).toBeTruthy();
    expect(car.engine instanceof Engine).toBeTruthy();
  });

  it("should instantiate a class with multiple dependencies", () => {

    var injector = new Injector();
    var car: Car = injector.get(Car);

    expect(car instanceof Car).toBeTruthy();
    expect(car.engine instanceof Engine).toBeTruthy();
    expect(car.doors instanceof Doors).toBeTruthy();

  });

  it("should instantiate a class with mocked dependency", () => {
    var injector = new Injector([MockEngine]);
    var car: Car = injector.get(Car);

    expect(car instanceof Car).toBeTruthy();
    expect(car.engine instanceof MockEngine).toBeTruthy();
  });



});
