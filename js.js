"use strict";
/* 
ЗАДАЧА:
1.Переделайте функцию конструктор в синтаксис класса.
2.С помощью свойства get создайте скорость в км\час пересчитанную из мили\ч умноженные на 1.6
3.С помощью set присвойте значение переменной speedUS скорость в км\ч, рассчитанную по формуле: скорость в милях\ч деленные на 1.6
4.Запустите методы ускорения и торможения, которые мы создали в прошлой практике.

ДАННЫЕ:

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};

ПОДСКАЗКА:
В классе, создайте свойство this.speedUS но не присваивайте ему значение, 
которые получают свойства из параметров конструктора. speedUS должно считаться посредствам сеттера и геттера.

*/

class Car {
  constructor(mark, speed, speedUS) {
    this.mark = mark;
    this.speed = speed;
    this.speedUS;
  }

  get speed() {
    return this.speedUS * 1.6;
  }
  // //мили/ч
  set speed(speed) {
    this.speedUS = speed / 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} едет со скоростью ${this.speed} км/ч`);
  }

  breaks() {
    this.speed -= 5;
    console.log(`${this.mark} едет со скоростью ${this.speed} км/ч`);
  }
}

const reno = new Car("Reno", 100);
console.log(reno);
// reno.breaks();
