{
    // Function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }


    const res1 = createArray('Bangladesh')
    // const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGeneric = createArrayWithGeneric<string>('bangladesh')


    type User = { id: number; name: string }
    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: "Mr. X" })














    const createArrayWithTuple = <T,Q>(param1: T,param2:Q) :[T,Q]=> {
        return [param1,param2]
    }


    const res10 = createArrayWithTuple('Bangladesh',222)
    const res11 = createArrayWithTuple<string,{name:string}>('bangladesh',{name:'Asia'})


const addCourseToStudent=<T>(student:T)=>{
   const course = 'Next Level Web Development' 
   return {
    ...student,
    course
   }
}
const student1 = addCourseToStudent({name:'Mr. X',email:'a@gmail.com',devType:'NLWD'})
const student2 = addCourseToStudent({name:'Mr. X',email:'a@gmail.com',hasWatch:'Apple Watch'})

    // 
}