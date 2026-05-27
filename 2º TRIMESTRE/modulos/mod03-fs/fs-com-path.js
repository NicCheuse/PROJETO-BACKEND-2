const fs = require('fs')
const path = require('path')

//const caminho = path.join(__dirname, 'README.md')
//console.log(caminho)
const caminho = path.resolve(__dirname, 'README.md')
const arquivo= fs.readFileSync(caminho, 'utf-8')
console.log(arquivo)
