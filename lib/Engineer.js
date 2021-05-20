const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "", id, email, github) {
    // get name, id, and email from employee class
    super(name, id, email);

    // set gethib, role, icon and role specific query answer
    this.github = github;
    this.role = "Engineer";
    this.icon = "fas fa-glasses";
    this.conditional = `<li class="list-group-item p-3">GitHub: <a href="https://github.com/${this.getGithub()}"> ${this.getGithub()}</a></li>`;
  }

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
