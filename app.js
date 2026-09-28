//Imports
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static Files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//Routes
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
