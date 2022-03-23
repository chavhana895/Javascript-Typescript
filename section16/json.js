//javascript object notation

//json data basic

// 1. keys need to be wrapped in ""
// 2. No function allowed as values in the JSON

{
    "firstName": "jason"
}


//JSON path

var school = {
    "name": "Learning University",
    "classes": [
        {
            "title": "coding is fun",
            "teacher":"Mr. Jones",
            "courseId": "A123",
            "credits": 3
        },
        {
            "title": "Salad for people who like salad",
            "teacher":"Ms. cha",
            "courseId": "B223",
            "credits": 4
        },
        {
            "title": "Soup for your belly",
            "teacher":"Adam saith",
            "courseId": "C543",
            "credits": 1
        }  
    ]

}


school
school.name
school.classes
school.classes[1].title
school.classes[0].credits


//Minified vs Pretty

//pretty Print

var school = {
    "name": "Learning University",
    "classes": [
        {
            "title": "coding is fun",
            "teacher":"Mr. Jones",
            "courseId": "A123",
            "credits": 3
        },
        {
            "title": "Salad for people who like salad",
            "teacher":"Ms. cha",
            "courseId": "B223",
            "credits": 4
        },
        {
            "title": "Soup for your belly",
            "teacher":"Adam saith",
            "courseId": "C543",
            "credits": 1
        }  
    ]

}


//Minified                                             //space saving  & downloading larger file
var school={"name":"Learning University","classes":[{"title":"coding is fun","teacher":"Mr. Jones","courseId":"A123","credits":3},{"title":"Salad for people who like salad","teacher":"Ms. cha","courseId":"B223","credits":4},{"title":"Soup for your belly","teacher":"Adam saith","courseId":"C543","credits":1}]}