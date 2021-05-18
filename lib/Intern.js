const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    // get role and icon
    this.role = "Intern";
    this.icon = "fas fa-user-graduate";
    this.school = school;
    this.conditional = `<li class="list-group-item p-3">School: ${this.getSchool()}</li>`;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;
