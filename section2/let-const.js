

let a=10;
console.log(a);
var b=20;


//   var - function scoped
//  let & const - block scope

// var name ="Avinash"
//  name="Avi"
//  console.log(name)

// let name ="Avinash"
//  name="Avi"
//  console.log(name)


const name ="Avinash"
 name="Avi"
 console.log(name)


//  function modJs(love){
//      if(love){
//          let name="Avinash"
//          const sname="Chavhan"
//          console.log("My name is "+name+" "+sname)
//      }
//  }

//  modJs(true)


// function modJs(love){
//     if(love){
//         var name="Avinash"
//         var sname="Chavhan"

//     }
//     console.log("My name is "+name+" "+sname)
// }

// modJs(true)


function modJs(love){
    if(love){
        let name="Avinash"
        const sname="Chavhan"

    }
    console.log("My name is "+name+" "+sname)
}

modJs(true)


// var whoWillWinToday= "Russia"                  

// if(true){
//     var whoWillWinToday="Ukraine"
//     console.log(whoWillWinToday)
// }
// console.log(whoWillWinToday)


let whoWillWinToday= "Russia"                  

if(true){
    let whoWillWinToday="Ukraine"
    console.log(whoWillWinToday)
}
console.log(whoWillWinToday)


const PI = 3.14


// const whoWillWinToday= "Russia"                  

// if(true){
//     const whoWillWinToday="Ukraine"
//     console.log(whoWillWinToday)
// }
// console.log(whoWillWinToday)