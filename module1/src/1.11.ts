{
    //Ternary Operator || Optional chaining|| nullish coalescing operator
const age: number =25;

if(age>=18){
    console.log("Adult");
}else{
    console.log("No adult");
}

const isAdult=age>=18? 'adult':'not adult';
console.log({isAdult});

// Nullish coalescing operator
// null / undefined --> decision making
const isAuthenticated =null;
const result1 = isAuthenticated?? "Guest";
console.log({result1});



// Optional chaining
type User={
    name:string;
    address:{
        city:string;
        road:string;
        presentaddress:string;
        permanentaddress?:string;
    }
}
const user:User ={
    name:'Persian',
    address:{
        city:'ctg',
        road:'awesome road',
        presentaddress:'ctg town'
    }
}
const permanentaddress =user?.address?.permanentaddress ?? "No permanent address"
console.log({permanentaddress}); 
    // 
}