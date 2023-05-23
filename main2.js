var Jugador1 = localStorage.getItem("JUno");
var Jugador2 = localStorage.getItem("JDos");
var Puntos1 = 0;
var Puntos2 = 0;
var cualP = "JUno";
var cualR = "JDos";
document.getElementById("NombreJ1").innerHTML = Jugador1 + " ";
document.getElementById("NombreJ2").innerHTML = Jugador2 + " ";
document.getElementById("J1Puntos").innerHTML = Puntos1;
document.getElementById("J2Puntos").innerHTML = Puntos2;
document.getElementById("Pregunta").innerHTML = Jugador1;
document.getElementById("Responde").innerHTML = Jugador2;
function Enviar(){
    n1 = document.getElementById("Num1").value;
    n2 = document.getElementById("Num2").value;
    respuesta = parseInt(n1) * parseInt(n2);
    console.log(respuesta);
    Mul = "<h4>" + n1 + "X" + n2 + "</h4>";
    Res = "<br> <br> Respuesta: <input type='text' id='RespuestaJ'>";
    Bot = "<br> <br> <button onclick='confirmar()'>confirmar</button>";
    todo = Mul + Res + Bot;
    document.getElementById("AdivinarM").innerHTML = todo;
}
function confirmar(){
    Rjugador = document.getElementById('RespuestaJ').value;
    RjugadorC = parseInt(Rjugador);
    if (respuesta == RjugadorC){
        if ((cualR == "JDos")){
            Puntos2 = Puntos2 + 1;
            document.getElementById("J2Puntos").innerHTML = Puntos2;
        }
        else {
            Puntos1 = Puntos1 + 1;
            document.getElementById("J1Puntos").innerHTML = Puntos1;
        }
    }
    PuntosG();
}
function PuntosG(){
    if (cualP == "JUno"){
        cualP = "JDos";
        document.getElementById("Pregunta").innerHTML = Jugador2;
    }
    else { 
        cualP = "JUno";
        document.getElementById("Pregunta").innerHTML = Jugador1;
    }
    if (cualR == "JDos"){
        cualR = "JUno";
        document.getElementById("Responde").innerHTML = Jugador1;
    }
    else { 
        cualR = "JDos";
        document.getElementById("Responde").innerHTML = Jugador2;
    }
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
    document.getElementById("RespuestaJ").value = "";
    Mul = "";
    Res = "";
    Bot = "";
    todo = Mul + Res + Bot;
    document.getElementById("AdivinarM").innerHTML = todo;
}