const express = require("express");
const path = require("path");
const cow = require("cowsay");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { cowMessage: null });
});

app.post("/speak", (req, res) => {
  const message = req.body.message;
  const cowMessage = cow.say({ text: message || "Moo!" });
  res.render("index", { cowMessage });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
