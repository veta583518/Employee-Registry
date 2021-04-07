const fs = require("fs");

const generateWebpage = (data) => {
  return `
      <!doctype html> 
      <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        
        <title>Team Profile Generator</title>
      </head>
    
      <body>
        <header class="bg-danger mb-3">
          <h1 class="text-white text-center p-2 fs-1"> My Team </h1>
      </header>
  
      <main class="d-flex justify-content-center p-2">
        <div class="container">
            <div class="row">
                <div class="col-3 d-flex justify-content-center>
                </div>
            </div>
        </div> 
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      </body>
      </html>
      `;
};
fs.writeFile("index.html", generateWebpage(), (err) => {
  if (err) throw new Error();

  console.log("Webpage complete! Checkout index.html to see the output!");
});

module.exports = generateWebpage;