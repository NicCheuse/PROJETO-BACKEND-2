function Sobradosalario(meuSalario){
    const contadeluz = 200;
    const aluguel = 1000;
const resto = meuSalario - (contadeluz + aluguel);
return `O valor que sobra do meu salário é: ${resto}`
}
const minhasSobras = Sobradosalario(7500);
console.log(minhasSobras);