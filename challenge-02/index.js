//title director genre release year rating(create a prototype method)
//use class or function syntax     function Movie(){} or class Movie{}
//"<movie>, a <genre film directed by < director was released in <releaseyear. it received a rating of <rating.



function Movie(title, director, genre, ry, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.ry = ry;
    this.overview = function(){
        console.log(this.title, ', a', this.genre, ' film directed by',this.director, 'was released in', this.ry, 'It released a rating of', this.rating );
    }
}

Movie.prototype.overview = function(){
    this.overview =
}