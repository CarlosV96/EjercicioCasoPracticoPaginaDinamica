/**
 * constante que trae el id del juego
 */
const id_Game = localStorage.getItem("idGame");

/**
 * funcion que hace un get del localStorage, obteniendo los datos de los jugadores con su apuesta
 * y añadiendo texto html en determinada parte del código, presentando el id del juego, y los jugadores
 * con su respectiva apuesta.
 * Y finalmente llama a otra funcion
 */
window.onload = function () {
  const idSet = document.getElementById("idGame_local");
  const playerOne = document.getElementById("jugador1");
  const playerTwo = document.getElementById("jugador2");
  const playerThree = document.getElementById("jugador3");
  const winner = document.getElementById("winner");

  const player_1 = localStorage.getItem("player1Bet");
  const player_1Parse = JSON.parse(player_1);
  const player_2 = localStorage.getItem("player2Bet");
  const player_2Parse = JSON.parse(player_2);
  const player_3 = localStorage.getItem("player3Bet");
  const player_3Parse = JSON.parse(player_3);

  const max = Math.max(
    player_1Parse.apuesta,
    player_2Parse.apuesta,
    player_3Parse.apuesta
  );

  idSet.innerHTML = "<span>" + id_Game + "</span>";
  playerOne.innerHTML = "<span> El jugador " + player_1Parse.nombre + " apostó : " +
    player_1Parse.apuesta + "</span>";
  playerTwo.innerHTML = "<span> El jugador " + player_2Parse.nombre + " apostó : " +
    player_2Parse.apuesta + "</span>";
  playerThree.innerHTML = "<span> El jugador " + player_3Parse.nombre + " apostó : " +
    player_3Parse.apuesta + "</span>";

  if (max == player_1Parse.apuesta) {
    winner.innerHTML = "<span> El ganador es: " + player_1Parse.nombre +
    " con una apuesta de : " + player_1Parse.apuesta + "</span>";
  } else if (max == player_2Parse.apuesta) {
    winner.innerHTML = "<span> El ganador es: " + player_2Parse.nombre +
    " con una apuesta de : " + player_2Parse.apuesta + "</span>";
  } else if (max == player_3Parse.apuesta) {
    winner.innerHTML = "<span> El ganador es: " + player_3Parse.nombre +
      " con una apuesta de : " + player_3Parse.apuesta + "</span>";
  }

  endGame();
};

/**
 * funcion de que hace el consumo de la api game
 */
function endGame() {
  const url = "http://localhost:3000/game/" + id_Game;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);
    });
}
