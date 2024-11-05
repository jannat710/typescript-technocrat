{
    // Access modifier
class BankAccount {
    public readonly id:number;
    public name:string;
    private _balance:number;

    constructor (id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

    // method
   public addDeposit(amount:number){
        this._balance=this._balance+amount
    }
   public getBalance(){
       return this._balance;
    }
}


// child
class StudentAccount extends BankAccount{
 test(){
this.
 }   
}

const goribManusherAccount= new BankAccount(111,'Mr. Gorib',20)
goribManusherAccount.addDeposit(30)
const myBalance = goribManusherAccount.getBalance()
console.log(myBalance);

    // 
}