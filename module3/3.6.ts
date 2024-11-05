{
    // Getter and Setter
    
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

        set deposit(amount:number){
this._balance=this._balance+amount;
        }
    //    public addDeposit(amount:number){
    //         this._balance=this._balance+amount
    //     }


    // Getter
    get balance(){
        return this._balance;
    }
    //    public getBalance(){
    //        return this._balance;
    //     }
    }
    
    

    
    const goribManusherAccount= new BankAccount(111,'Mr. Gorib',20)
    // goribManusherAccount.addDeposit(30) //Function call
    goribManusherAccount.deposit=50
    // const myBalance = goribManusherAccount.getBalance()

    const myBalance =goribManusherAccount.balance;
    console.log(myBalance);
    








}