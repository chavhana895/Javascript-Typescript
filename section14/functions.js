//Function basics
//Defining a function

const message = function(){
    console.log("Hello there!")
}

message()


//Declaring a function

function message(){
    console.log("By now!")
}

message()



function newMessage(){           //reusability of code
    console.log(1)
    console.log(2)
    console.log(3)
}

newMessage()
newMessage()
newMessage()
newMessage()
newMessage()


//returning data

function getMessage(){
    return "Hello there"
}

//getMessage()

console.log(getMessage)


function getNumber(){
    return 1
}

console.log(getNumber())


//Activity passing the buck

function getCost(){
    //cost of oranges
    return 5
}

console.log("five oranges cost about $ "+getCost())


function getNumber(){
    return 5
}

//console.log(getNumber()+5)

function getSomething(){
    return getNumber() + 5
}

console.log(getSomething())



/****************parameters and Arguments**************/

function message(message1, message2){
    console.log(message1)
    console.log(message2)
}

// message("message1","message2")

// function message(message1, message2){
//     console.log(message1)
//     console.log(message2)
// }

// message(1,true)



//Activity: Area of rectangle

function rectArea(length,width){
    var area=length*width
    return area
}

rectArea(2,5)


/***************const********* */

//const thing  --------->const  must be initialize
const something="bob"


const arr =[1,2,3]
arr[0]=4                  //Assign value to array index but not add or remove elements from array


/**************Variable Scope***************** */

var num =1
function thing(){
    num=2
    console.log("Function: "+num)
}
thing()
console.log("Outside Function "+num)



var num =1
function thing(){
    num=2
    var num2=2
    console.log("Function: "+num2)
}
thing()
console.log("Outside Function "+num2)



let num =1
function thing(){
    num=2
    var num2=2
    console.log("Function: "+num)
}
thing()
console.log("Outside Function "+num)


var num =1

if(1==1){
    console.log("If statement: "+num)
}
console.log("Outside If statement: "+num)



let num =1  //global scope

if(1==1){
    console.log("If statement: "+num)
}
console.log("Outside If statement: "+num)


if(1==1){
    var num=1                         //within block
    console.log("If statement: "+num)
}
console.log("Outside If statement: "+num)

