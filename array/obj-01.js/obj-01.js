const carros = {
    nome: 'Camaro',
    modelo: 'SS',
    cores : ['Amarelo', 'Preto', 'Branco'],
    cidades: {}

}
carros.modelo = 'Fusca'
carros['nome'] = 'Chevrolet'
console.log(carros.modelo)
console.log(carros.nome)


for(carro in carros){console.log(carro)}