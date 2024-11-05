{
    // oop-class
    class Animal {
    //    public name : string;
       public species:string;
    //    public sound:string;

    //    Parameter properties(Bar bar type define korte hobe na)


        constructor(public name:string, species:string,public sound:string){
            // this.name=name;
            this.species=species;
            // this.sound=sound;
        }
        // Annonymous function
        // methos--> class er moddhe function
        makeSound(){
            console.log(`the${this.name} says ${this.sound}`);
        }
    }
// instance create
    const dog =new Animal("German Shepard","dog","Ghew Ghew")
    const cat =new Animal("Persian","cat","meaw meaw")
    dog.sound
    cat.makeSound();





    // 
}