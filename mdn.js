function User(email, name) {
  (this.email = email), (this.name = name);
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

let userOne = new User("ccclala@hotmail.com", "sujin");

console.log(userOne);
