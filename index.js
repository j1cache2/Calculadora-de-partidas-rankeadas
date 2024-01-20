// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo(vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal





// Exercício resolvido usando o return

let vitorias = 100;
let derrotas = 35;
let saldoVitorias;

function saldo(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function ranking(saldoVitorias) {
    if (saldoVitorias <= 10) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ferro`);
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Bronze`);
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Prata`);
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ouro`);
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Diamante`);
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Lendário`);
    } else {
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Imortal`);
    };
}

saldo(vitorias, derrotas);
ranking(saldoVitorias);





// // Exercício resolvido sem usar o return

// let vitorias = 300;
// let derrotas = 75;
// let saldoVitorias;

// function saldo(vitorias, derrotas) {
//     saldoVitorias = vitorias - derrotas;
//     ranking(saldoVitorias);
// }

// function ranking(saldoVitorias) {
//     if (saldoVitorias <= 10) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ferro`);
//     } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Bronze`);
//     } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Prata`);
//     } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Ouro`);
//     } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Diamante`);
//     } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Lendário`);
//     } else {
//         console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível Imortal`);
//     };
// }

// saldo(vitorias, derrotas);