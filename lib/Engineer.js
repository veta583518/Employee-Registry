const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "", id, email, github) {
    // get name, id, and email from employee class
    super(name, id, email);

    // get office number, role, and icon for Manager
    this.github = github;
    this.role = "Engineer";
    this.icon = "fas fa-glasses";
    this.conditional = `<li class="list-group-item><a href="https://github.com/${this.getGithub()}"GitHub: ${this.getGithub()}</a></li>`;
  }

  // get the employee's role
  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
  getIcon() {
    return this.icon;
  }
  getConditional() {
    return this.conditional;
  }
}

module.exports = Engineer;
