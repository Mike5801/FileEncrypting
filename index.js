const express = require("express");

const multer = require("multer");

var path = require("path");

const app = express();

const port = 5000;

const log = console.log;

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/");
  },

  filename: function (req, file, callback) {
    return callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).array("file", 1);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// "/upload_file" corresponde al archivo de la ruta,
// function(req, res) corresponde al controlador
// multer({ storage: storage }).array("file", 1); -> array permite guardar
// varios archivos a diferencia de single que permite solo uno
app.post("/upload_file", function (req, res) {
  log("Cargando el archivo");
  const upload = multer({ storage: storage }).array("file", 1);

  upload(req, res, function (err) {
    //log(req.body);

    //log(req.files);

    if (err) {
      log(err);

      return res.end("Error uploading file.");
    }

    const pathDest = req.files[0].destination.slice(1);

    const finalPath = path.join(__dirname, "../../" + pathDest);

    log(finalPath);

    res.status(200).json({ code: 200, msg: "Ok" });
  });
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}

  console.log(`Now listening on port ${port}`);
});
