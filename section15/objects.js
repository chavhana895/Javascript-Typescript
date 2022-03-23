//object basics

// let person = {
//     firstName: "json",
//     favColor: "Black",
//     favNumber: 7,
//     isMarried: true,
//     children:["child1","child2"],
//     thing: {
//         name:"object",
//         color:"Blue"
//     }
// }

//Activity: Family tree

var family ={
    father:{
        firstName:"Thomas",
        lastName:"Wayne",
        isAlive: false
    },
    mother:{
        firstName:"Riya",
        lastName:"Wayne",
        isAlive: false
    },
    children:[
        {
            firstName:"Bruce",
            lastName: "Wayne",
            isAlive: true
        }
    ],
    butler: {
        firstName: "Alfred",
        lastName: "Pennyworth",
        isAlive: true
    },
    isRich: true
}


//Methods

var library={
    book: "javascript is fun",
    checkout: function(){
        console.log("You have checked out the book "+this.book)
    },
    checkIn: function(number){
        console.log("You have checked in "+number+" books.")
    }
}


//Assigning new  values

var person = {
     firstName: "jason",
     favNumber: 8,
     isMarried: true,
     children:[
         "child1",
         "child2"
     ]

}

person.firstName= "Bob"