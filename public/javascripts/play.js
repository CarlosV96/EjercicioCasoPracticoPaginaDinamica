/**
 * constante que obtiene información del botón de ejecutar el juego
 */
const play = document.getElementById("begin");
const id_Game = localStorage.getItem("idGame");

/**
 * cuando se da click en el botón de ejecutar juego.
 * llama a una función.
 */
play.addEventListener("click", function (event) {
  event.preventDefault();
  beginGame();
});

/**
 * funcion de que hace el consumo de la api startGame
 * y hace un set en el localStorage guardando el dato de cada jugador con su apuesta
 */
function beginGame() {
  const url = "http://localhost:3000/startGame/" + id_Game;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      const player1Bet = response.gamerBet.jugador1;
      const player2Bet = response.gamerBet.jugador2;
      const player3Bet = response.gamerBet.jugador3;

      localStorage.setItem("player1Bet", JSON.stringify(player1Bet));
      localStorage.setItem("player2Bet", JSON.stringify(player2Bet));
      localStorage.setItem("player3Bet", JSON.stringify(player3Bet));
    });
}
