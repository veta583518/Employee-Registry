const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebpage = require("./src/page-template.js");
const { writeFile } = require("./utils/generateWebpage");
const validator = require("email-validator");

const promptManager = () => {
  return inquirer
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
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      teamData.push(manager);
      promptAdd();
    });
};

const promptAdd = (teamData) => {
  return inquirer.prompt([
    {
      type: "list",
      name: "addList",
      message: "",
      choices: [
        "Add an Engineer to the team",
        "Add an Intern to the team",
        "Finished building my team",
      ],
    },
  ])
  .then((response)) => {
    switch(response)
  }
};
