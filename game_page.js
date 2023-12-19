Jugador1_nombre=localStorage.getItem("jugador1_nombre");
jugador2_nombre=localStorage.getItem("jugador2_nombre");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_nombre+":";
document.getElementById("player2_name").innerHTML=player2_nombre+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("jugador_pregunta").innerHTML="turno para preguntar:"+player1_nombre;
document.getElementById("jugador_respuesta").innerHTML="turno para responder:"+player2_nombre;

function enviar()

{

get_word=document . getElementById("palabra").value;
palabra=get_uord. toLowerCase();

charfiti=word.charAt(1);
length_divide_2=Math. floor (word. length/2);
charAt2=word. charAt (length_divide_2);
length_minus=word.length-1;
charAt3=ord. chart (length_minus);

remove_charAt1=word.replace(charAt1, "_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
}