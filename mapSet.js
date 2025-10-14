// Here we learn about set,weakset,map,weakmap
// in simple object we can only asign a string ki but map we can assing multiple type of key.
// map - map is special type of object where we can store multiple type of key like String,number,array,function .

const myMap = new Map()

const user = { name: 'Shivam' }
const fun = () => console.log('Yo!')

myMap.set('name', 'dev.shivamyadav')
myMap.set(100, 'numberKey')
myMap.set(user, 'objectKey')
myMap.set(fun, 'functionKey')

console.log(myMap.get(user)) // objectKey
console.log(myMap.size) // 4

// weakmap() - weakmap is make only object as key . if object delete then weak map autometic clean from memory
//“Private memory for objects only”

const weak = new WeakMap()
let user2 = { name: 'shivam yadav', age: 34 }
weak.set(user2, 'object key')
console.log(weak.get(user2))
user2 = null;


// set - set is a specail type of collection where we can not store duplicate value they ingore them 
// set is list or called arrray 

let  set = new Set([2,2,5,6,5,1,4]);
console.log(set)


// WeakSet me sirf objects store kar sakte ho, aur wo bhi weak reference ke sath.
// Yani agar object memory me nahi raha, to auto clean ho jata ha

const weakSet = new WeakSet();

let user3 = { name: "Shivam" };
weakSet.add(user3);
console.log(weakSet.has(user3)); // true

user3 = null; // garbage collect -> weakSet auto clean
