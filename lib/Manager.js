const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name = "", id, email, office) {
    // get name, id, and email from employee class
    super(name, id, email);
    this.office = office;
    // get manager only question
    this.conditional = `<li class="list-group-item>Office Number: ${this.getOffice()}</li>`;
    // get role and icon
    this.role = "Manager";
    this.icon = "fas fa-mug-hot";
  }

  // get the employee's role
  getRole() {
    return this.role;
  }
  // get Manager office number
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
