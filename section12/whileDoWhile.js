//while loop

var i=0

while(i<5){
    console.log(i)
    i++;
}

//do while loop

var i=0;
do{
    console.log(i)
    i++;
}while(i<5)


//for vs while vs do while

for(var i=1; i<=5; i++){
   console.log(i)
}

var i=1;

while(i<=5)
{
    console.log(i)
    i++
}


var i=1;

do{
    console.log(i)
    i++
}while(i<=5)



//to check any condition true or not
var answer
var areYouHappy=true                            
while(areYouHappy){
    answer=prompt("Are you happy?")
    if(answer=="yes"){
        console.log("You are happy")
    }else{
        areYouHappy=false
        console.log("You are not happy")
    }
}


//diff between do and do while

var i=0
while(i<0)
{
    console.log(i)
    i++
}

var j=0
do{
    console.log(j)
    j++
}while(j<0)