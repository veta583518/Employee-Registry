const Intern = require("../lib/Intern");

test("create intern object", () => {
  const intern = new Intern(
    "LaKeya",
    2101982,
    "lakeya61@gmail.com",
    "University of Memphis"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern role", () => {
  const intern = new Intern(
    "LaKeya",
    2101982,
    "lakeya61@gmail.com",
    "University of Memphis"
  );

  expect(intern.getRole()).toBe("Intern");
});

test("get intern school", () => {
  const intern = new Intern(
    "LaKeya",
    2101982,
    "lakeya61@gmail.com",
    "University of Memphis"
  );

  expect(intern.getSchool()).toBe("University of Memphis");
});
