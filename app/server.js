const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const api = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
    res.send({
      express:
        "Welcome in React/Express application to verify if the given NIP owner is in fact a VAT payer!"
    });
});

app.get("/api/check/*", api.check);

app.listen(port, () => console.log(`Listening on port ${port}`));
