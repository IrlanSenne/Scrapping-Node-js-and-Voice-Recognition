var fs = require('fs')

const filtrar = ``

fs.appendFile('filtrado.txt', filtrar.replace(/<\/?u[^>]*>/g,"").replace(/"/g, "'")
.replace(/<span[^>]*>[^<]*<\/span>/g, '').replace(/<\/?span[^>]*>/g,'').replace(/%&/g, '"'),

function (err) {
   if (err) throw err; 

   console.log('OK');
});