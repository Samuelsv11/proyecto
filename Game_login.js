function adduser(){

jugador1_nombre=document.getElementById("jugador1_nombre_entrada").value;
jugador2_nombre=document.getElementById("jugador2_nombre_entrada").value;

localStorage.setItem("jugador1_nombre");
localStorage.setItem("jugador2_nombre");
window.location="game_page.hmtl";
}