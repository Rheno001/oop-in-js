//create a user object that has 3 variables username and password should be private age

function MyClass() {
    this.userName = userName;
    this.password = password;
    this.age = age;
    
    this.username = function() {
      return username;
    };
    this.password = function() {
        return password;
      };
  }
  
  let obj = new MyClass();
  console.log(obj.userName, obj.password);
  console.log(obj.getuserName(), obj.password); 