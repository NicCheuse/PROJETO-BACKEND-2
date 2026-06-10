const {default: chalk} = require('chalk')
const fs = require('fs')
const path = require('path')    
const chalk = require ('chalk').default
try {
    const caminho = path.resolve(__dirname, 'README.md')
    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(chalk.green('arquivo carregado com sucesso!'))


    console.log(arquivo)
} catch (error) {
    console.log(chalk.yellow('falha ao carregar o arquivo. Tente novamente mais tarde'))
    console.log(chalk.red('Erro interno de leitura de arquivo: \n', error.message))
}
    
