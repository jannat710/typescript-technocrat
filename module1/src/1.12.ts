{
    // Nullable Type/unknown type
    // const searchName=(value:string|null)=>{
    //     if(value){
    //         console.log("Searching");
    //     }else{
    //         console.log("There is nothing to search");
    //     }
    // };

    // searchName(null);
// Unknown
const getSpeedInMeterPerSecond=(value:unknown) =>{
    if(typeof value==="number"){
        const convertedSpeed=(value*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    else if(typeof value ==="string"){
        const [result,unit]=value.split(" ");
        const convertedSpeed=(parseFloat(result)*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
        console.log(result);
    }
    else{
        console.log("wrong info");
    }
};
// getSpeedInMeterPerSecond(3000);
 getSpeedInMeterPerSecond(`1000 kmh^-1`);
// Never
const throwError=(msg:string):never=>{
    throw new Error(msg)
}
throwError('Muskil se error ho gaya')
    // 
}