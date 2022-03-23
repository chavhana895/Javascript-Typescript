// Adding properties to objects

var person = {
    firstName: "Avinash",
    lastName: "Chavhan"
}

person.age = 24

// Deleting Properties

delete person1.favColor

// Different way to add element

var person2 = {
    firstName: "Jason",
    lastName: "Myers",
    myName: function(){
        console.log(this.firstName+" "+this.lastName)
    }
}


var person2 = {
    firstName: "Jason",
    lastName: "Myers",
    myName(){
        console.log(this.firstName+" "+this.lastName)
    }
}


// Getters and Setters

// Getters gets the value as property
var person2 = {
    firstName: "Jason",
    lastName: "Myers",
    get myName(){
      return this.firstName+" "+this.lastName
    },
    set myName(value){
        var name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]
    }
}


// constructors
// blueprint of object
var me = {
    firstName: "Jason",
    lastName: "Myers",
    myName(){
        console.log(this.firstName+" "+this.lastName)
    }
}

var bestFriend = {
    firstName: "Bob",
    lastName: "Jones",
    myName(){
        console.log(this.firstName+" "+this.lastName)
    }
}


function Person(first , last){              //Constructor
    this.firstName = first
    this.lastName = last
    this.myName = function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

var bestFriend = new Person("Bob","James")

var me = new Person("Avinash", "Chavhan")


// Prototype

function Person(first , last){             
    this.firstName = first
    this.lastName = last
    this.myName = function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

Person.prototype.favColor = "Blue"

Person.prototype.printColor = function(){
    console.log(this.favColor)
}

var me = new Person("Avinash", "Chavhan")



