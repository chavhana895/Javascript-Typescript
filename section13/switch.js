//Switch statement

var favFood="pasta"

if(favFood=="pizza"){
    console.log("pizza")
}else if(favFood=="pasta"){
    console.log("pasta")
}else{
    console.log(favFood)
}


var favFood="pasta"

switch(favFood){
    case "pizza" :
        console.log("pizza")
        break
    case "pasta" :
        console.log("pasta")
        break
    default :
        console.log(favFood)
}