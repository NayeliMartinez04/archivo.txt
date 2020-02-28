const fs = require("fs");

fs.appendFile("document.txt", "Hello World!", function(err) {
  if (err) {
    return;
  }
  console.log("El archivo se ha creado exitosamente");
});
