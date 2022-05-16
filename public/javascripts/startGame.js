/**
 * funcion que hace un get del localStorage, obteniendo los nombres de los jugadores
 * y añadiendo texto html en determinada parte del código, presentando el id del juego, y los jugadores.
 */
window.onload = function () {
  const idSet = document.getElementById("idGame_local");
  const player1 = document.getElementById("jugador1");
  const player2 = document.getElementById("jugador2");
  const player3 = document.getElementById("jugador3");

  const getIdGame = localStorage.getItem("idGame");
  const getJug1 = localStorage.getItem("jug1");
  const getJug2 = localStorage.getItem("jug2");
  const getJug3 = localStorage.getItem("jug3");

  idSet.innerHTML = "<span>" + getIdGame + "</span>";
  player1.innerHTML = "<span>" + getJug1 + "</span>";
  player2.innerHTML = "<span>" + getJug2 + "</span>";
  player3.innerHTML = "<span>" + getJug3 + "</span>";
};
