const inquirer = require("inquirer");
const fs = require("fs");
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
// prompts user with choice to add additional team members or complete team
const promptAdd = (teamData) => {
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
      // use switch statement to call correct role's questions based on user selection from list
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
