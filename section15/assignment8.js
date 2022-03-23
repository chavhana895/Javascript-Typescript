
var restaurantMenu = {
    name: "Atithi Restaurent",
    items: [
        {
        itemName: "pizza",
        itemPrice: 14
        },

        {
        itemName: "cheese pizza",
        itemPrice: 12
        },

        {
        itemName: "meat combo pizza",
        itemPrice: 18
        },

        {
            itemName: "veggie combo pizza",
            itemPrice: 8
        },

        {
            itemName: "Bread sticks",
            itemPrice: 5
        },

    ],

    listMenuItems: function(){
       var menuList = ""
        for(var i=0; i<5 ; i++){
            // console.log(this.items[i].itemName)
            // console.log(this.items[i].itemPrice)
            menuList+=i+". "+this.items[i].itemName+" - $ "+this.items[i].itemPrice + "\n"
            
        }
        alert(menuList)
        var answer=prompt("Which item do you like? Enter the item no")
        this.selectMenuItem(answer)
    },
    selectMenuItem: function(number){
     alert(this.items[number].itemName)
    }
}