const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebpage = require("./src/pageTemplate.js");
const { writeFile } = require("./utils/generateWebpage");
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
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Invalid response. Please enter your email address!");
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
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "Add members to your team",
          choices: ["Engineer", "Intern", "My team is complete"],
        },
      ])
      // use if statement to create team members based on role and push to teamData array
      .then((role) => {
        if (role.menuChoice === "Engineer") {
          return addTeam(role.menuChoice).then((engineerData) => {
            const engineer = new Engineer(
              engineerData.name,
              engineerData.id,
              engineerData.email,
              engineerData.github
            );
            teamData.push(engineer);
            menu();
          });
        } else if (role.menuChoice === "Intern") {
          return addTeam(role.menuChoice).then((internData) => {
            const intern = new Intern(
              internData.name,
              internData.id,
              internData.email,
              internData.school
            );
            teamData.push(intern);
            menu();
          });
        } else {
          return buildTeam();
        }
      })
  );
};

// prompts user with questions about team members
const addTeam = (role) => {
  this.role = teamRole;
  let role = this.teamRole;

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the ${role}'s name.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the ${role}'s name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the ${role}'s id.",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the ${role}'s id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the ${role}'s email address.",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the {${role}'s email address!");
          return false;
        }
      },
    },
    // prompts for github when engineer selected
    {
      type: "input",
      name: "github",
      message: "Enter the ${role}'s GitHub username.(Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the ${role}'s GitHub username!");
          return false;
        }
      },
      when: (role) => {
        role.menuChoice === "Engineer";
      },
    },
    // prompts for school when intern selected
    {
      type: "input",
      name: "school",
      message: "Enter the school that the ${role} attends. (Required)",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the ${role}'s school!");
          return false;
        }
      },
      when: (role) => {
        role.menuChoice === "Intern";
      },
    },
  ]);
};
//
const buildTeam = () => {
  //   generateWebpage(teamData).then((generateWebpage) => {
  //     return new Promise((resolve, reject) => {
  //       fs.writeFile("./dist/index.html", pageHtml, (err) => {
  //         // if there is an error, reject the Promise and send the error to the Promise's `catch()` method
  //         if (err) {
  //           reject(err);
  //           //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
  //           return;
  //         }
  //         // if everything went well, resolve the Promise and send the successful data to the `.then()`method
  //         resolve({
  //           ok: true,
  //           message: "Webpage created!",
  //         });
  //       });
  //     });
  //   });
};

promptManager();
