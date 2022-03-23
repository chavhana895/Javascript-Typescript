var books = []

var book

book = prompt("What is your first book")
books.push(book)

book = prompt("What is your second book")
books.push(book)

book = prompt("What is your third book")
books.push(book)

book = prompt("What is your fourth book")
books.push(book)

book = prompt("What is your fifth book")
books.push(book)

book = prompt("What is your sixth book")
books.unshift(book)

books.pop()

console.log(books)



