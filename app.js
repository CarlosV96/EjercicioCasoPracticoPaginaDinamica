const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const mongodb = "mongodb://localhost/EjercicioPaginaDinamica";
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/game", require("./routes/game")); //este me arroja la información de toda la base de datos
app.use("/game", require("./routes/game-id")); //este necesito que me arroje informacion por ID de base de datos
app.use("/createGame", require("./routes/createGame")); // -- este ya funciona, crea el juego con los participantes
app.use("/startGame", require("./routes/startGame")); //-- para empezar el juego y otorgarle un numero a cada usuario.
app.use("/game", require("./routes/winner"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
