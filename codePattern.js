//  Here we code in design pattern.
//  module patter - in module patter we use ifee pattern . with iffe we can achive encapsulation.and make private our varablie and function .
//  we can not access function directly .
//  Basic syntax of ifee -
//  (function(){
// this is the syntax for writing ifee function
//  })()

let Bank = (function () {
  let Bankbalance = 50000

  function getWithDraws(val) {
    if (val > Bankbalance) {
      console.log("you don't have enough balance. Please check your bankBalanece !")
      return
    }

    if (val < Bankbalance) {
      let newBankBalance = Bankbalance - val
      Bankbalance = newBankBalance
      console.log(
        `Your money withdraw is sucess please collect your money ${val} and your current balance is ${Bankbalance}`
      )
    }
  }
  function checkBalance() {
    console.log(`Your current Bank Balance is : ${Bankbalance}`)
  }
  function deoposit(val) {
    Bankbalance += val
    console.log(`Your money sucessfully deposit your current Balance is : ${Bankbalance}`)
  }

  return {
    getWithDraws,
    checkBalance,
    deoposit
  }
})()

Bank.checkBalance()
Bank.getWithDraws(2000)
Bank.deoposit(20000)
