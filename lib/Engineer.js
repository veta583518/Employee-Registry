const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "", id, email, github) {
    // get name, id, and email from employee class
    super(name, id, email);

    // get office number, role, and icon for Manager
    this.github = github;
    this.role = "Engineer";
    this.icon = "fas fa-glasses";
  }

  // get the employee's role
  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
