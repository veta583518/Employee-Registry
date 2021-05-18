const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/pageTemplate.js");

const validator = require("email-validator");

// array to store team data
let teamData = [];

// prompts user to answer questions about manager
const promptManager = () => {
  console.log("Welcome Manager! Let's create your team roster!");
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter your name. (required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Invalid response. Please enter your name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "id",
          message: "Enter your employee ID. (Numbers only)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Invalid response. Please enter your employee ID!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "email",
          message: "Enter your email address. (required)",
          validate: function (email) {
            // Regex mail check (return true if valid mail)
            valid =
              /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                email
              );

            if (valid) {
              return true;
            } else {
              console.log(`Please enter a valid email address!`);
              return false;
            }
          },
        },

        {
          type: "input",
          name: "office",
          message: "Enter your office number. (required)",
          validate: (officeInput) => {
            if (officeInput) {
              return true;
            } else {
              console.log("Invalid response. Please enter your office number!");
              return false;
            }
          },
        },
      ])

      // creates a manager from user input, add manager to teamData array, and returns to menu prompt
      .then((managerData) => {
        teamData.push(
          new Manager(
            managerData.name,
            managerData.id,
            managerData.email,
            managerData.office
          )
        );
        menu();
      })
  );
};

// prompts user with menu with the option to add an engineer, intern or finish building my team
const menu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoice",
        message: "Add members to your team",
        choices: ["Engineer", "Intern", "My team is complete"],
      },
    ])
    .then((role) => {
      conditionalQuestions(role);
    });
};

const conditionalQuestions = (role) => {
  //console.log(role);
  if (role.menuChoice === "Engineer") {
    return (
      inquirer
        .prompt([
          // prompts for github when engineer selected
          {
            type: "input",
            name: "github",
            message: `Enter the ${role.menuChoice}'s GitHub username.(Required)`,
            validate: (githubInput) => {
              if (githubInput) {
                return true;
              } else {
                console.log(
                  `Please enter the ${role.menuChoice}'s GitHub username!`
                );
                return false;
              }
            },
          },
        ])
        // use if statement to create team members based on role and push to teamData array
        .then(async (conditionals) => {
          const employeeData = await addTeam(role);
          const engineer = new Engineer(
            employeeData.name,
            employeeData.id,
            employeeData.email,
            conditionals.github
          );
          //console.log(engineerData);
          // console.log(conditionals);
          teamData.push(engineer);
          menu();
        })
    );
  } else if (role.menuChoice === "Intern") {
    // console.log(role);
    // prompts for school when intern selected
    return (
      inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: `Enter the school that the ${role.menuChoice} attends. (Required)`,
            validate: (schoolInput) => {
              if (schoolInput) {
                return true;
              } else {
                return false;
              }
            },
          },
        ])
        // use if statement to create intern and push to teamData array
        .then(async (conditionals) => {
          const employeeData = await addTeam(role);
          const intern = new Intern(
            employeeData.name,
            employeeData.id,
            employeeData.email,
            conditionals.school
          );
          //console.log(intern);
          teamData.push(intern);
          menu();
        })
    );
  } else {
    return buildTeam();
  }
};

// prompts user with questions about team members
const addTeam = (role) => {
  // console.log(role);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Enter the ${role.menuChoice}'s name.`,
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter the ${role.menuChoice}'s name!`);
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: `Enter the ${role.menuChoice}'s employee id.`,
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log(`Please enter the ${role.menuChoice}'s employee id!`);
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: `Enter the ${role.menuChoice}'s email address.`,
      validate: (email) => {
        valid =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
        if (valid) {
          return true;
        } else {
          console.log(`Please enter a valid email address!`);
          return false;
        }
      },
    },
  ]);
};
//
const buildTeam = () => {
  // console.log(teamData);
  // console.log(teamData.length);
  generatePage(teamData).then((teamHTML) => {
    return fs.writeFile("./dist/index.html", teamHTML, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
};

promptManager();
