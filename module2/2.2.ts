{
    // Interfae


    // By using type alias
    type User1 = {
        name: string;
        age: number;
    }
    type User2 = {
        name: string;
        age: number;
    }

    type UserWithRole1 =User1 & {role:string};
    // same thing using interface
    interface UserWithRole2 extends User2{
        role :string
    }

    const user1:UserWithRole2={
        name:'Persian',
        age:23,
        role:"manager",
    }

    // const user1:User1={
    //     name:'Persian',
    //     age:23,
    // }
    // Same thing we will do it with interface
    // interface User2  {
    //     name: string;
    //     age: number;
    // }
    // const user2:User2={
    //     name:'Persian',
    //     age:23,
    // }



    // js-->object,array ->object,function->object

type Roll1 = number[];
interface Roll2{
    [index:number]: number
}

const rollNumber1: Roll2=[1,2,3]

// Function
type Add1 =(num1:number,num2:number)=>number
interface Add2{
    (num1:number,num2:number):number
}

const add:Add2 =(num1,num2)=>num1+num2

    // 
}