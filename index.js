var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')
const readline = require('readline');
var contador = 0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
  });

  rl.question('Digite o site para baixar as cifras ', resposta => {
    request(resposta, function(err, res, body){
        if(err) console.log('Erro: ' + err);
    
        var $ = cheerio.load(body ,  { decodeEntities: false });
   // TODAS => $('#js-a-songs li[data-hits!=-1] ') MAIS ACESSADAS =>   $('#js-a-t li ')
        $('#js-a-songs li[data-hits!=-1]').each(function(){
        
                var title = $(this).find("a").attr('href');        
          
                request('https://www.cifraclub.com.br'+title, function(error, response, body){

                    if(error) throw new Error(error)
                
                    let $ = cheerio.load(body, { decodeEntities: false })
                    var tom = $('#cifra_tom a').text()
                    var titulo = $('.t1').text()                    
                    var cifra =$('pre').html()
                    var banda = $('.t3 a').text()
                    
                  //  console.log( `("${titulo}","${tom}","<pre>${cifra}</pre>","${banda}"),` )
                  
                 fs.appendFile('cifras.txt', `(%&${titulo}%&,%&${tom}%&,%&<pre>${cifra}</pre>%&,%&${banda}%&),`+'\n',
                     function (err) {
                        if (err) throw err;
                      
                        contador++
                        console.log(contador +' com sucesso');
                    });
                                  
               
                })
                
 
        });

    });
    rl.close();
  });



   


