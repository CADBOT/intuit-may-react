'use strict'
function Person(name, age) {
  /*
   *
   * this = {}
   * this.__proto__ = Person.prototype 
   */
  this.name = name
  this.age = age
  /*
   * return this
   */
  this.sayName = function() {
    console.log(`my name is ${this.name}`)
  }

  this.greet = function(greeting) {
    console.log(`$[this.name} says ${greeting}`)
  }
}

var p = new Person('bob', 15)
p.sayName()

var name = p.name
var sayName = p.sayName

var boundSayName = p.sayName.bind(p)

boundSayName()

sayName.call(p)
sayName.bind(p)()

var greet = p1.greet

greet.call(p1, 'hello')
greet.apply(p1, ['hello'])
