
export function alugarFilme(nomeFilme, dataAluguel, preço) {
  return `Filme: ${nomeFilme} data que alugou o filme': ${dataAluguel} por R$ ${preço}`;
}

export function devolverFilme(nomeFilme, dataEntrega) {
    return `Filme: ${nomeFilme} data da entrega': ${dataEntrega}`;   
}