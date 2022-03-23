var triangle=""
for( var i=0; i<5; i++){

    for(var j=0; j<5; j++){
        if(j-i<=0){
	triangle=triangle+"*"	 
	
    }
    else{
        triangle=triangle+" "
    }
}
   triangle=triangle+ "" + "\n"
}

console.log(triangle)