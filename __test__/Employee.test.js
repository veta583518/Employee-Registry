const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee("Veronica", 961988, "veta583518@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("get employee name", () => {
  const employee = new Employee("Veronica", 961988, "veta583518@gmail.com");

  expect(employee.getName()).toBe("Veronica");
});

test("get employee id", () => {
  const employee = new Employee("Veronica", 961988, "veta583518@gmail.com");

  expect(employee.getId()).toBe(961988);
});

test("get employee email", () => {
  const employee = new Employee("Veronica", 961988, "veta583518@gmail.com");

  expect(employee.getEmail()).toBe("veta583518@gmail.com");
});

// test('get employee role', () => {
//     const employee = new Employee ("Veroncia", 961988, "veta583518@gmail.com");

//     expect(employee.getRole()).toBe("Employee")
// });
