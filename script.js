var vardas = document.getElementById('vardas');
var pavarde = document.getElementById('pavarde');
var amzius = document.getElementById('amzius');

var prideti = document.getElementById("Pridėti");
var minusFirst = document.getElementById('Ištrinti pirmą');
var minusLast = document.getElementById('Ištrinti paskutinį');

plius.addEventListener('click', add);

function add(){
  if(vardas.value && pavarde.value && amzius.value){
    var element = document.createElement("tr");
    element.innerHTML = "<td>" + vardas.value + "</td>" + "<td>" + pavarde.value + "</td>" + "<td>" + amzius.value + "</td>";
    tBody.append(element);
    vardas.value = ""
    pavarde.value = ""
    amzius.value = ""
  } else {
    alert("Įveskite duomenis");
  }
}
