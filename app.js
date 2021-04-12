const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebpage = require("./src/pageTemplate.js");
const { writeToFile } = require("./utils/generateWebpage");
const validator = require("email-validator");

// array to store team data and ids
let teamData = [];
let idArray = [];

// prompts user to answer questions about manager
const promptManager = () => {
  console.log("Welcome Manager! Let's create your team roster.");
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
          message: "Enter your employee ID. (required)",
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
          message: " Enter your email address. (required)",
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
          message: " Enter your office number. (required)",
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
      .then((data) => {
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.office
        );
        teamData.push(manager)
        idArray.push(data.id);
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
          choices: [
            "Add an Engineer to the team",
            "Add an Intern to the team",
            "My team is complete",
          ],
        },
      ])
      // use switch statement to call correct role's questions based on user selection from menu
      .then((response) => {
        switch (response.menuSelect) {
          case "Add an Engineer to the team":
            addEngineer()
            break;
          case "Add an Intern to the team":
            addIntern()
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

const addEngineer = (engineerData) => {
  // creates engineer object based on user input
  const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
  addTeam()
  .then((engineer) => {
    teamData.push(engineer);
    idArray.push(data.id);
    menu();
  })
};

const addIntern = (internData) => {
  // creates intern object based on user input
  const intern = new Intern(internData.name, internData.id, internData.email, internData.school)
  addTeam()
  .then((intern) => {
    teamData.push(intern);
    idArray.push(data.id);
    menu();
  })
};

const buildTeam = () => {
  fs.writeFileSync(outputPath, render(teamData), 'utf-8')
}
// prompts user with questions about team members
const addTeam = () => {
  return inquirer
    .prompt([
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
    ])
  }
  const conditionalQuestions = (employeeRole) => {
    this.employeeRole = employeeRole;
      switch (role) {
        // prompts for github when engineer selected
        case "engineer":
          return {
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
          };
          break;
        // prompts for school when intern selected
        case "intern":
          return {
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
          };
          break;
      }
    };
  // creates team member from user input, add to teamData array, and returns to add prompt
  // .then((data) => {
  //   const teamMember = new TeamMember(
  //     data.name,
  //     data.id,
  //     data.email,
  //     data.github,
  //     data.school
  //   );
  //   teamData.push(teamMember);
  //   menu();
  // })
};

promptManager()
  .then(menu())
  .then((data) => {
    return generateWebpage(data);
  })
  .then(writeToFile("./dist/index.html", data))
  .catch((err) => {
    console.log(err);
  });
