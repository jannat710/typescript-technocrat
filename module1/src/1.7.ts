{
    // Spread Operator
    // Rest operator




    // Learn Spread operator
    // Array
    const bros1: string[]=['Mir','Mejba','Tanmoy'];
    const bros2:string[]=['Ayiza','Anayza']
    bros1.push(...bros2)

// Object
const mentors1={
    typescript:'Mejba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2={
    prisma:'Firoz',
    next:'Tanmoy',
    cloud:'Nahid'
}
const mentorList={
    ...mentors1,
    ...mentors2
}

// Learn Rest operator
const greetFriends =(...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`);)
};
greetFriends('Abul','Babul','Kabul','Mokbul');
}