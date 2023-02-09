//create a user object that has 3 variables username and password should be private age





class User{
    constructor(username, password, age){
        this.name = username;
        this.password = password;
        this.age = age;
    }
}


var userOne = new User ("David", "password123", "25");
console.log(userOne.password);