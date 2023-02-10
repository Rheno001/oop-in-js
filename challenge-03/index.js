




const dishes = [{
    name: "Rice",
    vegetarian: true
},
{
    name:"Spaghetti",
    vegetarian: false
},
{
    name: "Steak",
    vegetarian: false
},
{
    name: "Oats",
    vegetarian: true
}
    
];

let vegetarian = dishes.filter(function(item){

    return item == true; });
console.log(vegetarian);