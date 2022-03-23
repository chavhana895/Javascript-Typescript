// for loop
// for(starting place; condition; incrementor){}
for(var i=0; i<=10; i++)
{
   console.log(i)
}


//never ending loops
//infinite loop

for(var i=1; i<10; i--){
    console.log(i)
}


//for loop with an if condition

for(var i=1 ; i<5; i++){
    if(i==1){
        console.log("Hello")
    }else if(i==2){
        console.log("Bye")
    }else if(i==3){
        console.log("yo")
    }else if(i==4){
        console.log("see ya")
    }
}

//breaking for loop

for(var i=1 ; i<10; i++){
    if(i==5){
        break;
    }else{
        console.log(i)
    }
}

//for loop with an array

var things =[1,2,"Hello","bye"]

for(var i=0; i<things.length; i++){
    console.log(things[i])
}

//Activity
var answer = prompt("Type YES or NO")
var answers = ["YES","NO"]
var responses = ["You said YES","You said No","You didn't follow directions"]

for(var i=0; i<2; i++){
    if(answer != answers[0] && answer != answers[1]){
        console.log(responses[2])
        break;
    }else if(answer== answers[i]){
        console.log(responses[i])
    }
}



// for loop in for loop

var numbers=[1,2,3,4,5]
var letters=["a","b","c"]

for(var i=0; i<5; i++){
    console.log(numbers[i])

    for(var j=0; j<3; j++){
        console.log(letters[j])
    }
}


//Activity square

var square=""
for( var i=0; i<5; i++){

    for(var j=0; j<5; j++){
     square=square+ "*" 
    }
    square=square+ "*" + "\n"
}

console.log(square)



var triangle=""
for( var i=0; i<5; i++){

    for(var j=0; j<9; j++){
    if(j+i>=4 && j-i<=4){
	triangle=triangle+"*"	 
	
    }
    else{
        triangle=triangle+" "
    }
}
   triangle=triangle+ "" + "\n"
}

console.log(triangle)


var star=""
for( var i=0; i<9; i++){

    for(var j=0; j<5; j++){
    if(j+i>=4 && j-i>=-4 && j+i<=13 && j-i<=4){
	star=star+"* "	 
    }
    else{
        star=star+" "
    }
}
  star=star+ "" + "\n"
}

console.log(star)




