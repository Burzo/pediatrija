const path = require("path")

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "pediatrija_react/build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pediatrija_react/build', 'index.html'));
})

app.listen(port, () => console.log("Pediatrija listening on " + port + "."))