//crie um array que contenha 3 frutas
//adcione 4 frutas com o método .push (<nomeFruta)
//remova 1 fruta com .pop()
//faça um loop for que remova todas as frutas
//verifique, se todas as frutas foram removidas
//imprima "nenhuma fruta encontrada

const frutas = ["maçã", "banana", "laranja"]
console.log(frutas)

frutas.push("uva")
frutas.push("abacaxi")
frutas.push("manga")
frutas.push("pera")

console.log(frutas)
for (const fruta of frutas) {
    console.log(fruta + " removida" ) 
}
frutas.pop()
console.log(frutas)



if (frutas.length === 0) {
    console.log("nenhuma fruta encontrada")
} else {
    console.log(frutas)
}
