//cashier assignment

let answer=prompt("You owe me 5 $. Please Enter the amount you are paying.")

function cashier(amount){
    let newCost
    let cost = 5
    newCost= cost-amount
    return newCost
}

//cashier(answer)

if(cashier(answer)==0){
    console.log("You gave exact amount")
}
else if(cashier(answer)<0){
    let positiveValue=cashier(answer) * -1
    console.log("you gave too much. Your change due is $ "+positiveValue+".")
}
else if(cashier(answer)>0){
    console.log("You gave too little. You still owe $"+cashier(answer)+".")
}
