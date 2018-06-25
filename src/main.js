function loadCohorts(){
    fetch('../data/cohorts.json')
    .then( res => res.json() )
    .then ( arrayCohorts => {
      let select = document.getElementById("cboCohorts");
            for (let i in arrayCohorts) {
                let option = document.createElement("option");
                select.options.add(option, 0);
                select.options[0].value = arrayCohorts[i].id;
                select.options[0].innerText = arrayCohorts[i].id;
            }
    })
}
function loadUsers(){
	let idcohort = document.getElementById("cboCohorts").value;
	let select = document.getElementById("cboUsers"); 
	select.innerText=null;
    fetch("../data/cohorts/"+idcohort+"/users.json")
    .then( res => res.json() )
    .then ( arrayUsers => {
        for (let i in arrayUsers) {
            let option = document.createElement("option");
            select.options.add(option, 0);
            select.options[0].value = arrayUsers[i].id;
            select.options[0].innerText = arrayUsers[i].name;
        }
		})
		.catch(ex=>{})
}

function getUsersData() {
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then( res => res.json() )
    .then ( users => {
        getProgressData(users);

    })

}
function getProgressData(users){
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then( res => res.json() )
    .then ( progress => {
     computeUsersStats(users, progress, ['intro']) 
    })

}
function computeUsersStats(users, progress, courses){
    let lista = users.map( function (userWhitStats) {
        try {
          userWhitStats.stats = {
            percent: null,
            exercises: {
              total: null,
              completed: null,
              percent: null,
            },
            reads: {
              total: null,
              completed: null,
              percent: null,
            },
            quizzes: {
              total: null,
              completed: null,
              percent: null,
              scoreSum: null,
              scoreAvg: null,
            }
          }
          return userWhitStats;
        } catch (error) {
         return {}; 
        }
          
        })
      console.log(lista);
      return lista

}