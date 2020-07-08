$(document).ready(function () {
    // Get JSON data from url
    $.getJSON("https://covidtracking.com/api/v1/states/tx/daily.json", function (data) {
      var dates = [];
      var confirmed = [];
      var recovered = [];
      var deaths = [];
      
  
    
      // The each loop select a single statewise array element
      // Take the data in that array and add it to variables
      $.each(data, function (id, obj) {
        dates.push(obj.date);
        confirmed.push(obj.cases);
        recovered.push(obj.recovered);
        deaths.push(obj.death);
      });
      
    dates.reverse();
    deaths.reverse();

   

    //chart
      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [{
              label: "Deceased",
              data: deaths,
              backgroundColor: "#c45850",
              fill:false,
            }]
          },
          options:{
          legend: {
            display:false,
          }
        }
        });   
      })
    })
          

let total_case = document.getElementById("total_case");
let new_case = document.getElementById("new_case");
let total_recover = document.getElementById("total_recover");
let current_hospital = document.getElementById("current_hospital");
let total_deaths = document.getElementById("total_deaths");
let new_deaths = document.getElementById("new_deaths");


fetch("https://covidtracking.com/api/v1/states/tx/current.json")       
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
