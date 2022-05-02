const express = require("express");
const controllerAPI = require("./api/controller")
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));

// start our server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Resources Routes
app.use("/api", controllerAPI);
app.get('/', async(req, res) => { 
  console.log('U are in index');
})

