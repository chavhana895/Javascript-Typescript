// Finding Elements

// var headingText = document.getElementById("heading")
// console.log(headingText)

// var paragraphText = document.getElementsByClassName("content")[1]
// console.log(paragraphText)

// var heading2Text = document.getElementsByTagName("h2")[0]
// console.log(heading2Text)



// console.log(document.body)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)


// // Relationships

// var h1Text = document.getElementById("heading").firstChild
// console.log(h1Text)

// var h1Sib = document.getElementById("heading").nextSibling
// console.log(h1Sib)

// var h1Par = document.getElementById("heading").parentNode
// console.log(h1Par)



//changing HTML

document.getElementById("heading").innerHTML= "This is heading"
document.getElementById("logo").alt="bug"

var p = document.createElement("p")
var pText = document.createTextNode("New Paragraph")
p.appendChild(pText)

//document.getElementById("main").appendChild(p)

var heading= document.getElementById("heading")
document.getElementById("main").insertBefore(p,heading)

// var logo = document.getElementById("logo")
// document.getElementById("main").removeChild(logo)



//changing style

document.getElementById("heading").style.color="blue"

document.getElementById("main").style.border= "1px black solid"