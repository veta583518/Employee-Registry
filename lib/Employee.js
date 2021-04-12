class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    this.icon = "";
  }
  // returns employee name
  getName() {
    return this.name;
  }
  // returns employee id
  getId() {
    return this.id;
  }
  // returns employee email
  getEmail() {
    return this.email;
  }
  // returns employee role
  getRole() {
    return this.role;
  }
  // returns icon
  getIcon() {
    return "";
  }
}

module.exports = Employee;
