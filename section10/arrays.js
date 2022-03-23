var container =[]

var first = "bob"
var second = "joe"
var third = "sam"

var people = ["bob","joe","sam"]   
//Arrays index always starting with zero

var stuff = [1,2,3,"test",true]

// Pop and Push

var container =["red","blue","yellow","brown"]

container.pop()   // It removes last element from array

container.push("orange") //It add element in the array


//shift and unshift

var container =["red","blue","yellow","brown"]
container.shift()  // It removes first element from array
container.unshift("orange")


//changing specific element

var container =["red","blue","yellow","brown"]

container[0] ="purple"


//splice and slice

var container =["red","blue","yellow","brown"]
container.splice(0,0,"black")  // add "black" to the 0th index
//splice -Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

container.splice(0,1) //It remove the first element

container.splice(0,1,"black") //remove the first element & insert black


var container =["red","blue","yellow","brown"]

var newContainer = container.slice(3)



//Activity all the things

var things = []

var answer 

answer = prompt("What is your first favorite thing?")
things.push(answer)

answer = prompt("What is your second favorite thing?")
things.push(answer)

answer = prompt("What is your third favorite thing?")
things.push(answer)

console.log(things)







