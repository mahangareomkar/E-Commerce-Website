///////////////////
// MODULE IMPORT //
///////////////////
const express = require("express");
const cors = require("cors");
const connectToMongo = require("./database/database");
const bodyParser = require("body-parser");
require("dotenv").config();


/////////////////
// DECLARATION //
/////////////////
const app = express();
const port = process.env.PORT;

/////////////////////////
// DATABASE CONNECTION //
/////////////////////////
connectToMongo();

///////////////////
// CONFIGURATION //
///////////////////
app.use(express.json());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb', parameterLimit: 100000 }));
app.use(cors());

////////////
// ROUTES //
////////////
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/uploads", express.static("uploads"))
app.use("/users/", require("./routes/users"));
app.use("/products/", require("./routes/product"));
app.use("/categories/", require("./routes/category"));
app.use("/featured/", require("./routes/featured"));
app.use("/transactions/", require("./routes/transaction"))

////////////
// LISTEN //
////////////
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
