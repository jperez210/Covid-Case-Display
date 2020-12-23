 

let total_case = document.getElementById("total_case");
let new_case = document.getElementById("new_case");
let total_recover = document.getElementById("total_recover");
let current_hospital = document.getElementById("current_hospital");
let total_deaths = document.getElementById("total_deaths");
let new_deaths = document.getElementById("new_deaths");


fetch("https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/states/tx/current.json")
.then(response => response.json().then( data => {
    console.log(data);
    total_case.innerHTML = data.positive;
    new_case.innerHTML = data.positiveIncrease;
    total_recover.innerHTML = data.recovered;
    current_hospital.innerHTML = data.hospitalizedCurrently;
    total_deaths.innerHTML = data.death;
    new_deaths.innerHTML = data.deathIncrease; 

})).catch(err => {
    console.log(err);
});
