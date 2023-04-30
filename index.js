/* IMPORTS DE LIBRERÍAS */
const express = require("express");
const dotenv = require("dotenv");

const solicitudesRoutes = require("./routes/solicitudes.routes.js")
/* CONFIGURACIÓN DE LA APLICACIÓN */
const app = express();
dotenv.config();
const port = 5000;

/* IMPORTS RUTAS */
app.use("/solicitud", solicitudesRoutes);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}

  console.log(`Now listening on port ${port}`);
});
