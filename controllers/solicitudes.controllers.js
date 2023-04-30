const Security = require("../securityUtils/security.js")

exports.uploadSolicitud = (req, res) => {
  const encryptFileName = Security.encryptFileName(req.files[0].filename)
  console.log("Encripted", encryptFileName)
  console.log("myFormName", req.body.name)
}

exports.getSolicitud = (req, res) => {
  const decryptFileName = Security.decryptFileName(req.params.name)
  console.log("Decripted", decryptFileName);
}