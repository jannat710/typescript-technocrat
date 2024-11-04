{
    // Generic type
    type GenericArray<T> = Array<T>
    // const rollNumbers : number[]=[3,6,8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];


    //const mentors :string[] =['Mr.X','Mr Y','Mr Z'];
    const mentors: GenericArray<string> = ['Mr.X', 'Mr Y', 'Mr Z'];


    //const boolArray : boolean[] =[true,false,true];
    const boolArray: GenericArray<boolean> = [true, false, true];


    // Similar way array of object
    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Mejba',
            age: 100
        },
        {
            name: 'Meera',
            age: 80
        }
    ]

    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y]

    const manus: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']


    // Similar
    const UserwithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'Persian', email: 'a@gmail.com' }]

    // 
}