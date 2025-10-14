// Basicaully object are collection of key value pairs where we can store multiple key and value
// a object key only be a string or a sybol
// a object propertis is evertthing (value,object,function,array,method);

//  creating a object
// 1.Simple object creation by object litlers

let obj = {
  name: 'shivam',
  role: 'dev',
  age: 22
}
//2. using new object();
let obj2 = new Object()
obj2.name = 'shivam2'

// 3 using object.create() Prototype-based objec.
let name2 = {
  greet() {
    console.log('hello world')
  }
}
const obj3 = Object.create(name2)
obj3.name = 'shivma'
console.log(name2)
// acess a object
// // 1. bracket notation
// console.log(obj["name"]);
// console.log(obj2["name"]);
// // 2. (.notation)
// console.log(obj.name)

// bulit in object method

// 1. Object.keys() - that is giving all key in object
console.log(Object.keys(obj))

// 2. Object.values()- that is giving all value in object

console.log(Object.values(obj))

//3. Object.entries()  - that is giving all key and values in form of array

console.log(Object.entries(obj))

// 4.Object.fromEntries() - thats return a array in form of object

let ar = [
  ['name', 'shivam'],
  ['age', 25]
]
console.log(Object.fromEntries(ar))

// 5 Object.assign(target,source) - copy a object to another object

let obj5 = {
  name: 'hello',
  age: 445
}
let copyobject = Object.assign(ar, obj5)
console.log(copyobject)

// 6. Object.freeze()  - no changeallows like no modification in values . if you modied they ignore them.

let ob = {
  name: 'hero',
  age: 85
}

Object.freeze(ob)
ob.name = 'shivam'
console.log(ob)

// Object.seal() - you can't add or remove propetis from an object you can only update the exsiting value ;

let ob2 = {
  name: 'hello',
  age: 34
}

Object.seal(ob2)
obj2.rename = 'sh'
console.log(ob2)

// Object.hadOwn(obj,key)
Object.hasOwn(ob2, 'name')
console.log(Object.hasOwn(ob2, 'name'))

// object destructing

// let { name, age } = obj
// console.log(age)

// with rename 

let {name:newname}= obj
console.log(newname)

// Spered and rest with object 
// for copy and mergeing a object 

let ts = {name:"jahon",age:34};
let gs = {...ts,city:"bly"};
console.log(gs)

//getter and setter 
// get - gettter - it is used for get value form an object 
// set - setter - it is userd for set value in objcet

let object = {
    balance:5000,

    get currentbalence(){
     return this.balance
    },

    set addamoutn(val){
     this.balance += val;
    },
}
object.addamoutn = 200
console.log(object.currentbalence)
