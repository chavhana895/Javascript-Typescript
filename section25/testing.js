//unit Testing
// Test against specific function

// Unit test typically Automated

//Unit vs integration
// Integegration is a test of multiple components together

// Types of Test

// Actual vs Expected
// Actual what the function returned
// Expected is what you expect to be returned

// Happy path
// - normal operation like addition of 2 num

// Negative path
// add letter to num

// Function for unit testing

//name is title of test
function test(name , expected , actual){
    if(expected === actual){
        console.log(name+ "  \nTest passed. Expected: "+expected+" is equal to Actual: "+actual+".")
    }else{
        console.log(name+" \nTest failed. Expected: "+expected+" is not equal to Actual "+actual+".")
    }
}

function blah(num){
    return num
}

test("Test if the number input is the same as the output.", 1, blah(2))



// Activity: Testing the add function

function test(name , expected , actual){
    if(expected === actual){
        console.log(name+ "  \nTest passed. Expected: "+expected+" is equal to Actual: "+actual+".")
    }else{
        console.log(name+" \nTest failed. Expected: "+expected+" is not equal to Actual "+actual+".")
    }
}

function add(num1, num2){
    return(num1 + num2)
}

// Two positive whole number
test("Two positive whole numbers", 3, add(1,2))


//one zero and a number greater than zero

test("one zero and a number greater than zero ",1, add(0,1))

// Two two digit number

test(" Two two digit number ",27 , add(15,12))

// A single digit and double digit number

test("A single digit and double digit number ",17 , add(2,15))

// A positive and negative number

test("A positive and negative number ",3 , add(7,-4))

// A decimal number and a whole number

test(" A decimal number and a whole number",2.5 ,add(2,0.5))

// A number String plus a number
// string failed     preconcate should be add
test(" A number String plus a number ",5, add("2",5))

//A string plus a string 

test("A string plus a string ",25 ,add("2","5"))

// A boolean plus a string

test("A boolean plus a string ", "trueHi" ,add(true, "Hi"))

//missing an arguments

test("missing an arguments ",NaN, add(1))

// missing both arguments

test("missing both arguments ", NaN , add())
