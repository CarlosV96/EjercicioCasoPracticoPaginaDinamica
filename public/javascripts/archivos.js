/** 
 * constante que captura el envío del formulario con los nombres de los jugadores
 * y llama una función.
*/
const frm = document.getElementById("enviar");

frm.addEventListener("submit", function (event) {
  event.preventDefault();
  enviarF();
});

/**
 * funcion que captura los nombres de los jugadores, y lo convierte en un objeto
 * que va a ser parametro de una nueva función.
 */
function enviarF() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  const name3 = document.getElementById("name3").value;
  const body = {
    jugador1: name1,
    jugador2: name2,
    jugador3: name3,
  };
  enviarJugadores(body);
}

/**
 * funcion que hace el consumo de la api createGame.
 * y hace un set en el localStorage guardando los nombres de los jugadores
 * y el id del juego.
 */
function enviarJugadores(body) {
  const url = "http://localhost:3000/createGame";

  fetch(url, {
    method: "POST", 
    body: JSON.stringify(body), 
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => { 
        const idGame = response._id;
        const jug1 = response.gamers[0];
        const jug2 = response.gamers[1];
        const jug3 = response.gamers[2];

        localStorage.setItem("idGame", idGame);
        localStorage.setItem("jug1", jug1);
        localStorage.setItem("jug2", jug2);
        localStorage.setItem("jug3", jug3);
    });
}




