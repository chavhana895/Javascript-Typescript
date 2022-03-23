// array length

var arr = [1, 2, 3, 4, 5]

arr.length


//converting an array to string

var arr = ["hi","bye","morning"]
arr.toString()

var arr = ["hi", "bye", "morning"]
var newArr = arr.join(" | ")


//merging Arrays

var arr1 = [1, 2, 3, 4]
var arr2 = [5, 6, 7, 8]
var arr3 = [9,10]
var newArr = arr1.concat(arr2,arr3)


//sorting a string array

var arr = ["b","a","c"]
arr.sort()

arr.reverse()


// sorting a number array

var num = [25, 5, 100]

num.sort()   // reverse sort

var num = [25, 5, 100]

num.sort(function(a,b){return a-b})       // Ascending order


num.sort(function(a,b){return b-a})         // Decending order



//Array forEach and map

var num = [1,2,3,4,5]

num.forEach(funky)                         // forEach return string type

function funky(value, index, array){
    console.log(value+ "\n")
}


var num = [1,2,3,4,5]
var newNum = ""
num.forEach(funky)

function funky(value, index, array){
  newNum = newNum + index+": "+value+ " & "+array[index]+"\n"
}


//map                                // map returns array

var num = [1,2,3,4,5]
var newNum
newNum = num.map(funky)

function funky(value, index, array){
    newNum = index+": "+value+ " & "+array[index]+"\n"
    return newNum
}


// Array filter

var num = [1, 5, 10, 12, 15]
var even = num.filter(isEven)

function isEven(value, index, array){
    return value % 2 == 0
}
