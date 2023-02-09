/*getAvailability() => "out of stock" if 0
available copies, "low stock" if < 10copies low stock or in stock

//Name isbn available copies 

SVGEllipseElement(numSold)
restock(numCopies)
use javascript classes and getter method*/

class Book = {
    constructor('title', 'author', 'isbn', 'copies'){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
   this.available = function(){
    console.log(this.title, 'available')
   }
   this.unAvailable = function()

}

var Book1 = new Book ('Home alone', 'James Cameron', '1829', '10');
var Book2 = new Book ('Home Grown', 'James Brown', '1829', '5');