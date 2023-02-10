//grtEdition()
//adding edition
//the current version of this book is <book edition

class Book {
    constructor(title, author, isbn, copies){
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

class TechnicalBook extends Book{
    getEdition(...edition){
        this.edition = edition;
    }
}


var Book1 = new Book ('Home alone', 'James Cameron', '1829', '10');
var Book2 = new Book ('Home Grown', 'James Brown', '1829', '5');

TechnicalBook.getEdition(edition);

console.log('The current version of this book is', this.edition);
