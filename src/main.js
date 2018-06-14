var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../data/cohorts/lim-2018-03-pre-core-pw/users.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {

         // Typical action to be performed when the document is ready:
      document.getElementById("botonJSON").addEventListener('click', function () {
  console.log(JSON.parse(xhttp.responseText))
});
    }
}
