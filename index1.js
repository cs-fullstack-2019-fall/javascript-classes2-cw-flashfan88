
// Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased.
// Create three different methods to change each attribute.
// Outside of the class create two different Movie objects, assign values to each object, and print them to the console.

class Movie {
    constructor(movieName,rating,yearRelease) {
        this.movieName = movieName;
        this.rating = rating;
        this.yearRelease = yearRelease;
    }
    print(){
        console.log(this.movieName);
        console.log(this.rating);
        console.log(this.yearRelease)
    }

}

let pictures = new Movie("Ironman","8/10","2009");
console.log(pictures);
pictures.print();
