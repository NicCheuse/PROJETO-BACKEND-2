const fs = require('fs');

console.log(fs);

//const arquivo = fs.readFileSync('./readme.md', 'utf-8');

const arquivofinal = fs.readFileSync(__dirname + '/readme.md', 'utf-8');
console.log(arquivofinal);