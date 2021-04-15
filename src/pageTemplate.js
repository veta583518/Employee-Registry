const fs = require("fs");

// create card for each employee
const generateCards = (teamData) => {
  const htmlArray = [];

  //for (let i =1; i < teamData.length; ++i) {
  return `
    <div class="card" m-3 style="width: 18rem;">
      <div class="card-header">
        <h2 class="card-title"> ${this.getName()}</h2>
        <h3 class="card-subtitile mb-2 text-muted"><i class="${this.getIcon()}"></i>${this.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item>Employee ID: ${this.getId()}</li>
          <li class="list-group-item>Email Address: 
            <a href = "mailto: ${this.getEmail()}"> ${this.getEmail()}</a>
          </li>
          ${this.getConditional}
        </ul>
      </div>
        `;
  //}
};

const generateWebpage = (data) => {
  return `
      <!DOCTYPE html> 
      <html lang="en"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
          
          <title>Team Profile Generator</title>
        </head>
      
        <body>
          <header class="bg-danger mb-3">
            <h1 class="text-white text-center bold p-2 fs-1"> My Team </h1>
          </header>
    
          <main class="d-flex justify-content-center p-2">
            <div class="row">
              <div class="col-sm>
                ${generateCards(teamData)}
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </body>
      </html>
    `;
};

module.exports = { generateWebpage };
