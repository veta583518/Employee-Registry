// const generateManager = require("../src/generateManager");
// const generateEngineer = require("../src/generateEngineer");
// const generateIntern = require("../src/generateIntern");

// create card for each employee

const generateCards = (teamData) => {
  let htmlArray = [];
  teamData.map((employee) => {
    const html = `
    <div class="card shadow mb-5 me-3 bg-body rounded" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title text-white"> ${employee.name}</h2>
        <h3 class="card-subtitile mb-2 text-white"><i class="${employee.icon} me-2"></i>${employee.role}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item p3">Employee ID: ${employee.id}</li>
          <li class="list-group-item p3">Email Address:
            <a href = "mailto:${employee.email}"> ${employee.email}</a>
          </li>
          ${employee.conditional}
        </ul>
      </div>
    </div>
    `;
    return (htmlArray = [...htmlArray, html]);
  });

  return htmlArray.join(" ");
};

module.exports = generatePage = (teamData) => {
  return new Promise((resolve, reject) => {
    const teamHTML = `
      <!DOCTYPE html> 
      <html lang="en"> 

        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Team Profile Generator</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        </head>
      
        <body>
          <header class="bg-danger text-center mb-3">
            <h1 class="text-white text-center bold p-2 fs-1"> My Team </h1>
          </header>
    
          <main class="d-flex justify-content-center p-2">
          <div class="col-sm-6 g-4">
              <div class="d-flex justify-content-center flex-wrap p-2">
                ${generateCards(teamData)}
              </div>
          </div>
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </body>
      </html>
    `;
    if (teamHTML) {
      console.log("...Generating Team Registry");
      resolve(teamHTML);
    } else {
      reject();
    }
  });
};
