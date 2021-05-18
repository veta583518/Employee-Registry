// const generateManager = require("../src/generateManager");
// const generateEngineer = require("../src/generateEngineer");
// const generateIntern = require("../src/generateIntern");

// create card for each employee
const generateCards = (teamData) => {
  const htmlArray = [];
  // teamData.map((name, id, email, icon, conditional, role) => {
  //   return `
  //   <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
  //     <div class="card-header bg-primary">
  //       <h2 class="card-title text-white"> ${name}</h2>
  //       <h3 class="card-subtitile mb-2 text-white"><i class="${icon} mr-3"></i>${role}</h3>
  //     </div>
  //     <div class="card-body">
  //       <ul class="list-group list-group-flush">
  //         <li class="list-group-item p3">Employee ID: ${id}</li>
  //         <li class="list-group-item p3">Email Address:
  //           <a href = "mailto:${email}"> ${email}</a>
  //         </li>
  //         ${conditional}
  //       </ul>
  //     </div>
  //   </div>
  //   `;
  // });

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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        </head>
      
        <body>
          <header class="bg-danger text-center mb-3">
            <h1 class="text-white text-center bold p-2 fs-1"> My Team </h1>
          </header>
    
          <main class="d-flex justify-content-center p-2">
              <div class="col-sm d-flex justify-content-center flex-wrap p-2">
                ${generateCards(teamData)}
              </div>
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </body>
      </html>
    `;
    if (teamHTML) {
      resolve(teamHTML);
    } else {
      reject();
    }
  });
};
