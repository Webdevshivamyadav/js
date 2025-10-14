// let a = 20;


// for(let i=0;i<a;i++){


// if( i % 2 == 0){
//    console.log("Even number",i)
// }

// }

// // Reverse a String

// let str = "shivam";

// let reversed ="";

// for(let i = str.length-1; i>=0; i--){
//     reversed += str[i];
 
// }

// console.log(reversed)

// //  sum of all number in array ;

// let add = [2,5,8,9];

// let Total=0;
// for(let i=0;i<add.length;i++){
//     Total += add[i]
// }
// console.log(Total)



// // =================== count vowels 
// let oldstr = "ravi babu mourya";
// let vol = "AEIOUaeiou";
// let count =0
// for(let i=0 ; i<=oldstr.length;i++){
//     if(vol.includes(oldstr[i])){
//         count++
//     }
// }

// console.log(count)


// // Postive and negetive numnvber find

// let arr = [20,-40,60,-70];

// for(let i=0;i<arr.length;i++){

//     if(arr[i] > 0){
//         console.log("number is postive ",arr[i])
//     }
//     else{
//         console.log("numvber is negetive",arr[i])
//     }
// }

// // Sum of each evenn numbers in array 
// let arr3= [2,7,5,6];
// let sum=0;

// for(let i=0; i<arr3.length;i++){
//     if(arr3[i]% 2 ==0){
//         sum += arr3[i] 
//     }
// }
// console.log(sum)


// // Print star pattern 

// for(let i=1;i<=5;i++){
//     let str=''

//     for(let j=1;j<i;j++){
//         str += "*" 
        
//     }


//     console.log(str)
// }
// // Gst calculator 



// const totalPrice = 234;
// const GstForumula = totalPrice * 18 /100;

// const  NewBill = GstForumula;

// const TotalBill = NewBill+totalPrice;

// console.log(TotalBill)

// //  Emi calculator- Not a fully correct predition but something is accurate 

// let totalValue = 30000;
// let Time = 1;
// let InterstRate = 2;
// let TotalInterst =  (totalValue*Time*InterstRate)/100
// let InstallMent = totalValue/12 + TotalInterst
// console.log(InstallMent);


// // age calculator
// // For user 

// let date = 24;
// let month = 6;
// let year  = 2001;

// // Get current date,month,year

// let Dbdate = new Date().getDate();
// let DbMonth = new Date().getMonth();
// let DbYear  = new Date().getFullYear();

// let age = (Dbdate,DbMonth,DbYear)-(date,month,year);
// let day = (Dbdate)- (date);
// let getmonth = DbMonth - month;
// let getYear = DbYear-year
// console.log("Total Age ",age,"Total Days",day,"Total Month",getmonth)


// // Otp Genrator 

// let otp = Math.floor(Math.random()*999*10)
// console.log(otp)

// arr.slice(1,2)
// console.log(arr)
// // 

// const str = "shivam yadav";
// let newstr = "";

// for(let i=str.length-1;i<=0;--i){
//     newstr+= str[i]
// }

// console.log(newstr)]

// let arr = [2,5,56,52,59,48];
// let newarr= arr.slice(0,3)
// console.log(newarr);
// console.log(arr);
