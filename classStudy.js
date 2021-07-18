class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.courseList;
  }
  login() {
    return "you logged in";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am admin";
  }
}

module.exports = User;

const rock = new User("rock", "rock@email.com");
console.log(rock.getInfo());
rock.enrollCourse("js");

const tom = new SubAdmin("tom", "jerry@com");
console.log(tom.login());
console.log(tom.getAdminInfo());
