// problem 1
function radianToDegree(radian){
    const sum = radian / 99;
    const dosomicFix = sum.toFixed(2)
    return dosomicFix;
}
const output = radianToDegree(105656550) 
// console.log((output))



// problem 2
function isJavaScpritFile (string){
    if( 0 < string.endsWith(".js")){return true}
    else{return false}
}
const file = isJavaScpritFile("index.js")
// console.log(file)



// problem 3
function oilPrice(all){
    let sum = 0;
    
    for(i=0; i<all.length; i++){
        const zog = i;
        const element = all[zog];
        sum = sum + element
        // console.log(zog,sum)
    }
return sum;
}

var addition = [114,130,135]
oilPrice(addition)



// problem 4
function publiceBusFare (passanger){

    const busFare = 50;
     const maicroBus = 11;
     const tiketPrice = 250;
     
     let passengerBus =(passanger / busFare);
     let passangerBus2 = passanger % busFare;
     let maicroPassenger =(passanger / maicroBus)
     let extraPassanger = passangerBus2 % maicroBus;
 
     let totalFare =( passengerBus * busFare + maicroPassenger * maicroBus + extraPassanger ) * tiketPrice ;
     return totalFare;
 }
 
 let passengerVara = 110;
 let fare = publiceBusFare(passengerVara);
 console.log(fare)




 
//  problem 5
function isBestFriend (firstFriend,lastFriend){

    if(
        firstFriend.name !== -1){
            return true
        }
    
    else {
    
    return false
    }
    }
    
    const firstFriend = {
        name : "mahin"
    }
    const lastFriend = {
        name : "adib"
    }
    // console.log(isBestFriend(lastFriend))