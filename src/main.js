const userUrl = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
const progress = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";
const cohortUrl = "../data/cohorts.json";

const dataRequest = (url, callback) => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.onload = callback;
	xhr.send();
}
const getCohort = () => {
	let arrayCohorts = JSON.parse(event.target.responseText);
	let select = document.getElementById("cboCohorts");
	for (let i in arrayCohorts) {
		let option = document.createElement("option");
		select.options.add(option, 0);
		select.options[0].value = arrayCohorts[i].id;
		select.options[0].innerText = arrayCohorts[i].id;
	}
};

const getUsers = () => {
	let arrayUsers = JSON.parse(event.target.responseText);
	let select = document.getElementById("cboUsers");
	for (let i of arrayUsers) {
		let option = document.createElement("option");
		select.options.add(option, 0);
		select.options[0].value = arrayUsers[i].id;
		select.options[0].innerText = arrayUsers[i].name;
	}
};
let cboUsers = document.getElementById('cboUsers');
cboUsers.addEventListener("change", function () {
	getProgress();
});

const getProgress = () => {

	let select = document.getElementById("cboUsers");
	let arrayProgress = JSON.parse(event.target.responseText);
	let arrayUnits = arrayProgress[select.value]['intro']['units'];
	document.getElementById("progressTable").innerText = null;
	for (let i in arrayUnits) {
		let fila = "<tr><td>" + i + "</td><td>" + arrayUnits[i].totalParts + "</td></tr>";
		let btn = document.createElement("TR");
		btn.innerHTML = fila;
		document.getElementById("progressTable").appendChild(btn);
	}
};
dataRequest(cohortUrl, getCohort);
dataRequest(userUrl, getUsers);
dataRequest(progress, getProgress)
