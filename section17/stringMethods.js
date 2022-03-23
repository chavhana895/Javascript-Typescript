//String length

var thing ="hello"       //length - 5

string.length

//password
// Min > 5 char

if(thing.length > 5){
    //do something
}


//using indexes and searching

var sentence = "I say hello and you say hello"

//first occurance

sentence.indexOf("hello")     //index starting from zero

//last occurance

sentence.lastIndexOf("hello")

//search

sentence.search("hello")          //gives first occurance

//Taking a slice or substring or substr

var str = "Happy, Excited, Calm"

var s1 = str.slice(7,14) //subString
console.log(s1)

var s1 = str.slice(7)
console.log(s1)

var s1 = str.slice(-13,-6)   //right to left
console.log(s1)

var s1 = str.slice(-13)   //right to left
console.log(s1)
//Excited, Calm



var str = "Happy, Excited, Calm"

var sb = str.substring(7,14)
console.log(sb)

sb=str.substring(7)
console.log(sb)

sb=str.substring(-13,-6)
console.log(sb)

sb=str.substring(-13)            //subString not allowed negative indexes
console.log(sb)



var str = "Happy, Excited, Calm"

var sr = str.substr(7,14)    // 1st starting index & 2nd how long the string you want
console.log(sr)

var sr = str.substr(7,7)
console.log(sr)

var sr = str.substr(7)  //getting starting index and goes to the string length
console.log(sr)

var sr = str.substr(-13,7)   //we can use negative indexes
console.log(sr)

var sr = str.substr(-13)
console.log(sr)



// Replacing content

var str = "I have turkey for lunch and turkey for dinner."        //only replacing first instances match
var lunch = str.replace("turkey","pasta")
console.log(lunch)

lunch = str.replace("turkey","pasta")
console.log(lunch)

lunch = str.replace(/turkey/g,"pasta")  //g- global, i-instance,  global changes every word of matching
console.log(lunch)

lunch = str.replace(/Turkey/gi,"pasta")  //global & case insensative
console.log(lunch)



// converting to Upper , Lower and Trimming

var word = "happy"

var upperWord = word.toUpperCase()
console.log(upperWord)



var word = "HAPPY"

var lowerWord = word.toLowerCase()
console.log(lowerWord)


var sentence = "   Hello world!   "
var clean = sentence.trim()
console.log(clean)



//converting string to Array

var str = "1,2,3,4,5"
var arr = str.split(",")

var str = "1 2 3 4 5"
var arr = str.split(" ")

var str = "12345"
var arr = str.split("")

var str = "I have a puppy!"
var arr = str.split(" ")


//converting string to a number

var num = "5"
var newNum = Number(num)

newNum = Number("5.5")
newNum = Number("0.5")
newNum = Number(" 5.5")
newNum = Number("t5")       // having only numbers in string

var num = ""
num = parseInt("5")
num = parseInt("5.5")  //Not take decimal point
num = parseInt("0.5")
num = parseInt(" 5")

var num = ""
num = parseFloat("5.5")
num = parseFloat("0.5")