
const fs = require('fs')
const path = require('path')
const frasePreferida = `Avante Renan Santos e sucumba Lula e PT!\n`
const log = `Atenção, você gosta de coisas baitolas...\n`

try{

const arquivo = path.resolve(__dirname, 'frase.md')
fs.appendFileSync(arquivo, frasePreferida, 'utf-8')

//Reescreve totalmente o conteúdo
fs.appendFileSync(arquivo, log, 'utf-8')
fs.appendFileSync(arquivo, log, 'utf-8')
}catch (error) {
    console.log('Erro ao criar o arquivo: \n', error.message)

fs.appendFileSync(arquivo, log, 'utf-8')
}