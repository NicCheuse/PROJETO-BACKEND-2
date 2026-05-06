// Perfil profissional usando interpolação de strings

const profissional = {
    nome: "Nicolau Solza",
    idade: 25,
    profissao: "Desenvolvedor de Software",
    habilidades: ["JavaScript", "Node.js", "React", "Python"],
    experiencia: "5 anos",
    empresa: "Padres Tech",
    salarioMedio: "12.000,00"
};

const perfil = `Olá, meu nome é \n${profissional.nome}, tenho \n${profissional.idade} anos e sou \n${profissional.profissao}.
Possuo experiência de \n${profissional.experiencia} na área e trabalho atualmente na \n${profissional.empresa}.
Minhas principais habilidades incluem: \n${profissional.habilidades.join(", ")}
 Meu salário médio é \n${profissional.salarioMedio}.`;


console.log(perfil);