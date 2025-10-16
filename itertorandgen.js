// iterator - itreator itrate a object and list of element and return one by one value
// this is itreate arrya , object in on demand .
// they give a value,done property that are describe the value of object and list array etc and the done property showing the itertion is fineshed or not with the form of true and false 
// if continue printing false that means itertion is not completed if done protery is true that means itretion is completed .


let arr = [9, 3, 2, 5, 6, 2]

let itreator = arr[Symbol.iterator]()
console.log(itreator.next())
console.log(itreator.next())
console.log(itreator.next())
console.log(itreator.next())
console.log(itreator.next())
console.log(itreator.next())
console.log(itreator.next())

// what is genretors 

// // Generator ek special function hota hai jo tu kabhi pause kar sakta hai aur baad me resume bhi.
// Normal function to ek hi baar chalta hai poora.
// Generator = "on-demand data producer".
// Syntax 👇

// function* likhne se generator bnta hai (notice the *).


function* numbers(){
  yield "hello brother",
  yield "this is my name "
}

let gen = numbers();
console.log(gen.next());
console.log(gen.next());