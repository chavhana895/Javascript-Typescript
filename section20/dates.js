// date basics

var newDate = new Date()


//getting part of a date

var newDate = new Date()

newDate.getFullYear()

newDate.getDate()

newDate.getMonth // months start from zero

var today = (newDate.getMonth()+1)+" - "+newDate.getDate()+" - "+ newDate.getFullYear()

newDate.getHours()  // 24 hour clock

var time = newDate.getHours()+" - "+newDate.getMinutes()+" - "+newDate.getSeconds()


//setting new Date

var newDate = new Date()

newDate.setFullYear(2023)

newDate.setFullYear(2022, 5, 4)

newDate.setMonth(0)