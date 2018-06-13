/*var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../data/cohorts/lim-2018-03-pre-core-pw/users.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("botonJSON").addEventListener('click', function () {
  console.log(JSON.parse(xhttp.responseText))
});
    }
}*/
 function getCohort() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {

        let arrayCohorts = JSON.parse(xhttp.responseText);
       // console.log(arrayCohorts);
        let select = document.getElementById("cboCohorts");

        for (let i in arrayCohorts) {
          let option = document.createElement("option");
          select.options.add(option, 0);
          select.options[0].value = arrayCohorts[i].id;
          select.options[0].innerText = arrayCohorts[i].id;
        }
      }
    };
    xhttp.open("GET", "../data/cohorts.json", true);
    xhttp.send();
	};
	function computeUsersStats() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {

        let arrayUsers = JSON.parse(xhttp.responseText);
       // console.log(arrayCohorts);
        let select = document.getElementById("cboUsers");

        for (let i in arrayUsers) {
          let option = document.createElement("option");
          select.options.add(option, 0);
          select.options[0].value = arrayUsers[i].id;
          select.options[0].innerText = arrayUsers[i].id;
        }
      }
    };
    xhttp.open("GET", "../data/users.json", true);
    xhttp.send();
  };