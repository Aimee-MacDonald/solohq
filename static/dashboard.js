function btnLogin(){
  document.getElementById("header").innerHTML =`
    <form id="loginform" action="/register" method="get">
      <button type="submit">Register</button>
      <input type="text" placeholder="Email" name="un" required>
      <input type="password" placeholder="Password" name="pw" required>
      <button>Login</button>
    </form>
  `;
}


/*
function Dashboard(){
  this.header = new Header();
}

function Header(){
  this.lines = [
    `<div id="header">`,
    `</div>`
  ];
}

Dashboard.prototype = {
  render: function(){
    return this.header.render();
  }
};

Header.prototype = {
  render: function(){
    return this.lines.join("\n");
  }
};

var el_dashboard = document.getElementById("dashboard");
var dash = new Dashboard();
el_dashboard.innerHTML = dash.render();
*/
