//converting number to a string

var num = 1234
var str
str = num.toString()

(123).toString()

(123.5).toString()


// Exponentials and decimals

var x = 5.546

x.toExponential(2)
x.toExponential(5)


var x = 5.556

x.toFixed(2)  // it counting decimal numbers
x.toFixed(5)


var x = 5.556

x.toPrecision(2)  //it counting all the number
x.toPrecision(5)


// Not a number            NaN

Number("t5")

"hellow"/5


// Math Object

Math.PI

Math.round(4.4)

Math.pow(5,3)

Math.sqrt(25)

Math.ceil(4.4)  //rounded to next number

Math.floor(4.7)

Math.min(1,2,5,10,-5)

Math.max(1,2,5,10,-5)

Math.random()  // gives number between 0 - 1
