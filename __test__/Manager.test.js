const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("creates manager object", () => {
  const manager = new Manager("Ida", 2101962, "idamartin26@yahoo.com", 8220);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});

test("gets employee's role", () => {
  const manager = new Manager("Ida", 2101962, "idamartin26@yahoo.com", 8220);
  expect(manager.getRole()).toBe("Manager");
});

test("get manager office number", () => {
  const manager = new Manager("Ida", 2101962, "idamartin26@yahoo.com", 8220);

  expect(manager.getOffice()).toBe(8220);
});
