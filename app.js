const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebpage = require("./src/page-template.js");
const { writeFile } = require("./utils/generateWebpage");
const validator = require("email-validator");

// array to store team data

let teamData = [];

// prompts user to answer questions about manager
const promptManager = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the manager's name. (required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the manager's name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "id",
          message: "Enter the manager's employee ID. (required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the manager's employee ID!");
              return false;
            }
          },
        },

        {
          type: "email",
          name: "email",
          message: " Enter the manager's email address. (required)",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Please enter the manager's email address!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "office",
          message: " Enter the manager's office number. (required)",
          validate: (officeInput) => {
            if (officeInput) {
              return true;
            } else {
              console.log("Please enter the manager's office number!");
              return false;
            }
          },
        },
      ])

      // creates a manager from user input, add manager to teamData array, and returns to add prompt
      .then((data) => {
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.office
        );
        teamData.push(manager);
        promptAdd();
      })
  );
};
// prompts user with menu with the option to add an engineer, intern or finish building my team
const promptAdd = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "menuChoice",
          message: "Add members to your team",
          choices: [
            "Add an Engineer to the team",
            "Add an Intern to the team",
            "My team is complete",
          ],
        },
      ])
      // use switch statement to call correct role's questions based on user selection from menu
      .then((selection) => {
        switch (selection.menuChoice) {
          case "Add an Engineer to the team":
            addEngineer();
            break;
          case "Add an Intern to the team":
            addIntern();
            break;
          case "My team is complete":
            buildTeam();
            break;
          default:
            "My team is complete";
        }
      })
  );
};
// prompts user with questions about engineer
const addEngineer = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: "Enter the engineer's name.",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engId",
          message: "Enter the engineer's id.",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the engineer's id!");
              return false;
            }
          },
        },
        {
          type: "email",
          name: "engEmail",
          message: "Enter the engineer's email address.",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Please enter the engineer's email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "Enter the engineer's GitHub username.",
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log("Please enter the engineer's GitHub username!");
              return false;
            }
          },
        },
      ])
      // creates a engineer from user input, add engineer to teamData array, and returns to add prompt
      .then((data) => {
        const engineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        teamData.push(engineer);
        promptAdd();
      })
  );
};

// prompts user eith questions about intern
const addIntern = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the intern's name.",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the intern's id. (Must be a number)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the intern's id!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the intern's email address.",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              console.log("Please enter the intern's email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "Enter the school that the intern attends.",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter the intern's school!");
              return false;
            }
          },
        },
      ])
      // creates a intern from user input, add intern to teamData array, and returns to add prompt
      .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamData.push(intern);
        promptAdd();
      })
  );
};
promptManager();
