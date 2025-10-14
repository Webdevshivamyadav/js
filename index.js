class vendingMachine{
    constructor(){
        this.ProductId = this.ProductId;
        this.ProductName = this.ProductName;
        this.Price = this.Price
    }


    setProductDetail(ProductName,Pricce,ProductId){
        this.ProductName = ProductName;
        this.ProductId = ProductId;
        this.Price = Pricce;
    }
    
    getProduct(cash,ProductName,qty){

      if(ProductName != this.ProductName){
           console.log("Unkown Product Name ")
           return 
      }  

      if(cash < this.Price ){
         let RemainPrice = cash - this.Price ;
         console.log(`Enter More Cash Rs: ${RemainPrice} the selected item is Rs:${this.Price}`)
         
         return 

      }

      if(cash > this.Price){
         const returnPrice =  cash - this.Price;
         console.log("Collect Your Extra Cash :", returnPrice)
         console.log("Collect Your item :",ProductName)
      }
     
       cash === this.Price? console.log("Collect Your item :",ProductName):null


    }
}

const vm = new vendingMachine();
 
vm.setProductDetail("Water",10,1);
console.log(vm)
vm.getProduct(100,"Water",1)
