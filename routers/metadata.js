const express = require('express');
const multer = require('multer');
const routerMetadata = express.Router();
const storage = multer.memoryStorage(); // Almacenar datos binarios en memoria
const upload = multer({ storage: storage }); //instancia del middleware que se utiliza para procesar la carga de archivos en las solicitudes POST.

/*
* upload.single('upfile') es para manejar el archivo subido por 
* formulario. 'upfile' es el name que se le da en el form de html.
* Es parte de la configuración del middleware y se esta especificando
* que solo se procesa un archivo
*/
routerMetadata.post('/', upload.single('upfile'), (req, res) => {
  //Para acceder al archivo subido
  const archivo = req.file;

  //Accediendo a metadata
  const fileName = archivo.originalname;
  const fileType = archivo.mimetype;
  const fileSize = archivo.size;

  res.json({
    name: fileName,
    type: fileType,
    size: fileSize
  })
})

module.exports = routerMetadata;