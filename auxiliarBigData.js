var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('https://www.cifraclub.com.br/1-timoteo-316/', function(error, response, body){

    if(error) throw new Error(error)

    let $ = cheerio.load(body, { decodeEntities: false })
    var tom = $('#cifra_tom a').text()
    var titulo = $('.t1').text()                    
    var cifra =$('pre').html()
    var banda = $('.t3 a').text()
   

  //  console.log( `("${titulo}","${tom}","<pre>${cifra}</pre>","${banda}"),` )
 
 fs.appendFile('corinhos.txt', `("${titulo}","${tom}","<pre>${cifra}</pre>","${banda}"),`+'\n',
     function (err) {
        if (err) throw err;
        console.log('Arquivo salvo com sucesso!');
    });




})