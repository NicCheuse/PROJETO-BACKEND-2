let healt = 100;

function DanoJogador(arma, dano) {
    if (healt > 0) {
        console.log("O jogador já está morto!");
    } else {
        const danoTotal = healt - dano;
        return `${arma} causa ${dano} -> ${danoTotal}`;
    }
}

export.DanoJogador = DanoJogador;