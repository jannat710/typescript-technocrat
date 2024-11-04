{




      // object Destructuring
  const user ={
    id:23,
    name:{
        firstName:'Jannatul',
        middleName:'Ferdous',
        lastName:'Athoy',
    },
    contactNo: '01700000000',
    address:'Mirpur',
  };

  const {contactNo,name:{middleName:midName},}=user;


    // Array Destructuring
    const myFriends = ['chandler','joey','ross',
        'rachel']
        // find ross
        // const [a,b,bestFriend]=myFriends;
        // or
        // const [,,bestFriend]=myFriends;

        // after ross find rest name
        const [,,bestFriend,...rest]=myFriends;
}