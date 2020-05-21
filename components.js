var fs = require('fs')


var componentes = ` ` 

  
  fs.appendFile('lista.txt',componentes.replace(//g, "this.titulo = data") ,
  function (err) {
     if (err) throw err;
     console.log('Arquivo salvo com sucesso!');
 });


/**
for(let i = 0; i < componentes.length; i++){
    fs.appendFile('lista.txt', componentes.replace(/f1/g, '{').replace(/f2/g, '}'),
    function (err) {
       if (err) throw err;
       console.log('Arquivo salvo com sucesso!');
   });
}
 */