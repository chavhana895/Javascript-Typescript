//Comparison Operator
// == : equal to
// === : equal to but with types                          // Same type
// != : not equal
// !== : not equal
// < :  less than
// > : greater than
// >= : greater than OR equal to
// <= : less than OR equal to


if(1==1)
{
    console.log("They are the same")
}


if(2 > 1)
{
  console.log("2 is greater")
}

var someNumber = 1

if(someNumber==1)
{
    console.log("The numbers are the same")
}

else
{
    console.log("The Numbers are different")
}



//What if?

//it directly shows the input name
prompt("What is your name?")

//it directly not shows it store this string value in variable then we have to call the variable
var answer = prompt("What is your favorite color?")

var answer2 = prompt("Favorite soda")

var answer3 = prompt("Favorite number")
answer3
7

var answer4 = prompt("What is your favorite color?")   //needs the same string, This is case sensitive

if(answer4=="blue")
{
    console.log("That is my favorite color too!")
}


var name ="Avinash"

if(name == "Avinash")
{
   console.log("Hello my name is "+name+" too")
}
else{
    console.log("Hello, "+name+". Nice to meet you")
}

var animal = prompt("What is your favorite animal?")
if(animal == "dog"){
    console.log("This is my favorite too")
}
else{
    console.log("I think that a "+animal+" would nice also")
}

var animal = prompt("What is your favorite animal?")
if(animal == "dog"){
    console.log("This is my favorite too")
}
else if(animal == "cat")
{
    console.log("I think that a "+animal+" would nice also")
}
else{
    consol.log("I don't like animals")
}


//comparing multiple sets of data in the statement

// &&   :   and      Both condition should be true
// ||   :   or       Either first or second condition be true

if(1 ==1 && 2==2){
    console.log("They both are the same")
}


if(1 ==1 || 2==3){
    console.log("One or both are same")
}

// Nesting the if statement

if(1==1){
    if(2==2){
        console.log("Both are the same")
    }
}

if(1==1){
    if(3==2){
        console.log("Both are the same")
    }
    else{
        console.log("Not same")
    }
}

//Activity

var answer1 = prompt("What is your favorite color")
var answer2 = prompt("pick a number 1-5")

if(answer1=="blue" && answer2 =="1"){
        console.log("Those are my choices")
}



var answer1 = prompt("What is your favorite color")
var answer2 = prompt("pick a number 1-5")

if(answer1=="blue" && answer2 =="1"){
        console.log("Those are my choices")
}
else{
    console.log("You chose "+answer1+" and "+answer2)
}