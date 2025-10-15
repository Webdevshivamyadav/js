// Here we learn about callbacks,promise , async taks , sync task
// callback - basicully callback is a function they function passed in another function parameter means - jb bo function ka kaam pura ho jaye tb callback function ko chla do

//promise - promises basiclully a object created with the new keyword .
// promise ka mtlb hota jb koi chiz hm mnga rhe khi se like data from api then jb data a jaye to kuch to krna hai
// promise ke 3 state hote hai like 1. pending - mtlb abhi data mnagaya hai or bo proscessing me hai

// 2. fuilfiled - mtlb process pura ho chuka or dta mill chula hai
// 3. rejectetd - mtlb process reject ho gya or data nhi mila
// async - jo oprestion ya task phle inisate ho jate ho or baad me reslut dete hai bo hote async task
// sync - sync operation or task bo hote jo lgatar chlte rhete hai rukte .

// promis syntax
// let getData = new promise((resolve,reject) =>{
// code
// })

// 🧠 Promise Consume kaise karte hain?

// Promise ek object return karta hai, jisko handle karne ke liye hum use karte hain:

// .then() → agar promise resolve ho

// .catch() → agar promise reject ho

// .finally() → dono ke baad chalega

// Example 👇

function fetchproduct() {
  const fetchurl = new Promise(async (resovle, reject) => {
    let url = await fetch('https://fakestoreapi.com/products')
      .then((res) => console.log(res))
      .then((s) => {
        console.log(s[0])
        
      })
  })

  return fetchurl
}
// const db = fetchproduct()
// console.log('Your exp', db)

//  new version of handling promise

let fetchdb = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data);
    //  sending the data to the next file 
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetchdb()
