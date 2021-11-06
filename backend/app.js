const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const comicRoutes = require("./api-routes/comic-routes/comic-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", comicRoutes);
// exp://127.0.0.1:19000
app.listen(`${port}`, "192.168.254.26");
