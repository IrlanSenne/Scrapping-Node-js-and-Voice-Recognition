const fs = require('fs')

function callback  (err, contents) {
    console.log(err, String(contents))
}

fs.readFile('../../', callback)