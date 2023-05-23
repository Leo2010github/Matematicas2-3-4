var Jugador1 = "";
var Jugador2 = "";
function E(){
    Jugador1 = document.getElementById("J1").value;
    Jugador2 = document.getElementById("J2").value;
    localStorage.setItem("JUno", Jugador1);
    localStorage.setItem("JDos", Jugador2);
    window.location = "index2.html";
}