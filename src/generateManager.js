const Manager = require("../lib/Manager");

const generateManager = (Manager) => {
  for (let i = 1; i < teamData.length; ++i) {
    teamData
      .filter(({ role }) => role === "Manager")
      .map(({ name, id, email, conditional }) => {
        return `
<div class="card m-3" style="width: 18rem;">
<div class="card-header">
  <h2 class="card-title"> ${name}</h2>
  <h3 class="card-subtitile mb-2 text-muted"><i class="${icon}"></i>${role}</h3>
</div>
<div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item>Employee ID: ${id}</li>
    <li class="list-group-item>Email Address: 
      <a href = "mailto:${email}"> ${email}</a>
    </li>
    ${conditional}
  </ul>
</div>
  `;
      })
      .join("");
  }
};

module.exports = generateManager;
