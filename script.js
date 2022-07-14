// function adicionar(...numeros) { // Independente de quantos parametros irei receber, uso o Rest ...
//     console.log(numeros);
// }

// adicionar(5, 6, 7, 8, 9, 10);


function adicionar(nomes, ...novosNomes) {
    let novasInfos = [
        ...nomes,
        ...novosNomes
    ];
    return novasInfos;
}


let nomes = ["Pedro", "Bonieky"];
let outros = adicionar(nomes, "Vivian", "Lola", "Meg");

console.log(outros);