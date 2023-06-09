const multer = require("multer");
const Security = require("../securityUtils/security.js");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/");
  },

  filename: function (req, file, callback) {
    return callback(null, file.originalname);
  },
});

exports.encrypt = (req, res, next) => {
  const upload = multer({ storage: storage }).array("file", 1);
  
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }

    // const pathDest = req.files[0].destination.slice(1);

    // const finalPath = path.join(__dirname, "../../" + pathDest);


    const original = process.env.SECRET_KEY_FILE;
    Security.encryptFile("./public/", req.files[0].filename, original).then(
      function (results) {
        // res.status(200).json({ code: 200, msg: "Ok" });
        next();
      }
    );
  });
}
