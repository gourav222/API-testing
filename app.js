const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
require("./db/conn.js");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hotel booking API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "Acro",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
{
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./Routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs,{ explorer: true })
);


app.use(require('./routes/adminRoutes.js'))
app.use(require('./routes/userRoutes'))
app.use(require('./routes/hotels'))

app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
})