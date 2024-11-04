{
    //
    // Type Alias
    type Student={
        name:string;
        age:number;
        contactNo?:string;
        gender:string;
        address:string;
    }


    
    const student1:Student={
        name:"Jannatul",
        age:24,
        gender:"female",
        contactNo:"01766666666",
        address:"Mirpur", 
    };
    const student2:Student={
        name:"Tommy",
        age:24,
        gender:"male",
        address:"ECB", 
    };
    const student3:Student={
        name:"Bal",
        age:24,
        gender:"male",
        address:"Niketon", 
    };





    type UserName=string
    type IsAdmin=boolean

    const userName: UserName='Persian'
    const isAdmin:IsAdmin=true




type Add =(num1:number,num2:number)=>number;
    const add:Add=(num1,num2)=>num1+num2;
    // 
}