const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("create engineer object", () => {
  const engineer = new Engineer(
    "Mary",
    721966,
    "marymoore@gmail.com",
    "MaryMooreTech"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer role", () => {
  const engineer = new Engineer(
    "Mary",
    "07021966",
    "marymoore@gmail.com",
    "MaryMooreTech"
  );

  expect(engineer.getRole()).toBe("Engineer");
});

test("get engineer github", () => {
  const engineer = new Engineer(
    "Mary",
    "07021966",
    "marymoore@gmail.com",
    "MaryMooreTech"
  );

  expect(engineer.getGithub()).toBe("MaryMooreTech");
});

test("get icon for employee role", () => {
  const engineer = new Engineer(
    "Mary",
    "07021966",
    "marymoore@gmail.com",
    "MaryMooreTech"
  );

  expect(engineer.getIcon()).toBe("fas fa-glasses");
});
