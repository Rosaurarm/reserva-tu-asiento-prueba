// estructura  que nos prmita  tener  varios  valores arreglo que represente los asientos del avion
// ocupado=true
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

//declarar un contador que nos  ayude  a  rastrear  el numero de  asientos ocupados
var busySeats = 0;

var paintSeats = function(array) {
  var containerSeats = document.getElementById("seats");

  for (var i =  0; i < array.length ;  i++) {
    var seat = document.createElement("div");
    seat.className = "seats";

    //del primer  elemento al  cuarto, en nuestro  arreglo va  a ser primera clase
if(i < 4) {
    seat.style.background = "green";
} else {
   seat.style.background = "yellow";
}
containerSeats.appendChild(seat);
 }

};

var reserve = function (){
var bttn = document.getElementById("bttn");
bttn.addEventListener("click",chooseZone);
};

var chooseZone = function() {
var choice = prompt(
  "En que  zona  prefieres reservar \n 1. Primera Clase  \n 2. Economica Clase \n\n Por favor  ingresa  el número de preferencia");


    if (choice == 1){
      checkFirstClassZone();
    } else if (choice == 2) {
      checkEconomiClassZone();
    } else {
       alert("Por  favor  ingresa  un  numero valido");
     }
};
var checkFirstClassZone = function(){
 var zone = "Primera clase";
 // recorre del elemento 0  al elemento 3 y verifica  cuales  estan  disponibles
 for (var index = 0; index < 4; index ++){
   if(airlineSeats[index] == false) {
     airlineSeats[index] = true;
     reserveSeat(index);
     paintTicket(index,zone);
     // al reservar asiento no necesitamos   seguir  recorriendo nuestro arreglo
     // rompemos el ciclo con  break
   break;
 }else if (index == 3  && airlineSeats[index] == true) {
    reasignEconomiClassZone(zone);
  }
 }
};
var checkEconomiClassZone = function(){
   var zone = "Economica clase";
  for(var index = 4; index < 10; index ++){
    if(airlineSeats[index] == false) {
      airlineSeats[index] = true;
    reserveSeat(index);
    paintTicket(index,zone);
  break;
 }else if (index == 9 && airlineSeats[index] == true)  {
    reasignFirstClassZone(zone);
  }
 }
};

var reserveSeat = function(indexToPaint){
  var seat = document.getElementsByClassName("seats");
  seat[indexToPaint].textContent = "Ocupado";
};

var  reasignEconomiClassZone = function (zone ){
  var reasign = confirm(
    "Ya no quedan asientos disponibles  en "  + zone +
   "\n  Quieres  reservar en zona economica? " );
  if (reasign == true){
    checkEconomiClassZone();
  } else {
    nextFlight();
  }
};
var reasignFirstClassZone = function(zone){
  var reasign = confirm(
    "Ya   no quedan asientos en "  +  zone +
    "\n  Quieres  reserva en primera  clase? ");
   if(reasign == true){
     checkFirstClassZone ();
   } else {
     nextFlight();
   }
  };
  var paintTicket= function(index,zone){
    var containerTickets =document.getElementById("tickets");
    var ticket = document.createElement("div");
    ticket.className ="seats";
    var title = document.createElement("p");
    var reservedSeating = document.createElement("p");
    var zoneClass =document.createElement("p");
    title.textContent= "Pase de  Abordar";
    reservedSeating.textContent = "No. de asiento" + (index +1);
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reserveSeating);
    ticket.appendChild(zoneClass);
    containerTickets.appendChild(ticket);

  };
  var nextFlight = function(){
    alert("Nuestro  proximo vuelo sale  en 3  horas");
   };
paintSeats(airlineSeats);
reserve();

    //reserveSeat(index);

 //
 //
//


// paintSeats(airlineSeats);
// reserve();
