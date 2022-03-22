require("dotenv").config;
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { movies } = require("./constants/movies.js");

const app = express();
const PORT = process.env.POST || 4000;
// not getting port number using process.env.POST
console.log(PORT);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1> Homepage</h1>");
});
app.get("/movies", (req, res) => {
  res.json(movies);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log("server started at port 4000");
});
