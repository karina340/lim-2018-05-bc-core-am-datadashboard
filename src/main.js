import { deflateRaw } from "zlib";
var xhttp = newXMLHttpRequest();
xhttp.open("GET", "../data/cohorts/lim-2018-03-pre-core-pw/users.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      document.getElementById("botonJSONuser").innerHTML = xhttp.responseText;
      document.getElementById("botonJSONprogress").innerHTML = xhttp.responseText;

    }
};

 //computeUsersStats(users, progress,courses) {
   //{


  //}
//};
