const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./users.js");
const userRoutes = require("./routes.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

// Middleware
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.send("le server à demarrer!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server demarre sur le port : http://localhost:${port}`);
});

// Utiliser les routes
app.use("/api", routes);

// Servir les fichiers statiques de React
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
