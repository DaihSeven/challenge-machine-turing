/**  VERSÃO 2 => Com chunks: pré-processamento dos dados em blocos de operações.
 * possui 2 fases -> Monta blocos e Processa blocos
 * sequencia → chunks → resultados
 * Análise: versão chunk é mais didática, faz em formato passo a passo, armazenar tudo no bloco e depois processa, mas utiliza mais memória O(n) + O(n/3),já que o chunks é um intermediário.
 * Escálavel, reutilizável e testável
 * fita → array de entrada
 * cabeça de leitura → índice
 * regras → objeto de operações
 * estado → resultado gerado
 * 
*/
// Teste
//console.log(maquinaTuringModerno([1, "+", 2, 3, "*", 3, 5, "-", 2, 8, "/", 4, 9, "%", 3])); //deu certo
//console.log(maquinaTuringModerno([11, "+", 2, 3, "*", 0, 5, "-", 20, 8, "/", 5, 10, "%", 3])); // deu certo
//console.log(maquinaTuringModerno([1, "+", 2,"+", 5, 3, "*", 3, 5, "-", 2, 8, "/", 4, "*", 2, 10, "%", 3])); // deu erro throw new Error("Array inválido: deve conter múltiplos de 3 elementos");
/**
 * ALGORITMO MaquinaTuring
 * **/
const regras = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : null,
    "%": (a, b) => b !== 0 ? a % b : null
};

function machineTuring(sequencia_operacoes) {
    const chunks = [];

    for(let i = 0; i < sequencia_operacoes.length; i += 3){
        chunks.push([
            sequencia_operacoes[i], 
            sequencia_operacoes[i + 1], 
            sequencia_operacoes[i + 2]
        ]);
    }
     return chunks.map(([num1, operador,num2]) => {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return null;
        };
     
        if(!regras[operador]) {
            console.warn(`Operador inválido: ${operador}`);
            return null;
        }

        return regras[operador](num1, num2);
});

}

console.log(machineTuring([1, "+", 2, 3, "*", 3, 5, "-", 2, 8, "/", 4, 9, "%", 3])); //deu certo [ 3, 9, 3, 2, 3 ]
console.log(machineTuring([11, "+", 2, 3, "*", 0, 5, "-", 20, 8, "/", 5, 10, "%", 3])); // deu certo [ 13, 0, -15, 1.6, 1]
console.log(machineTuring([1, "+", 2,"+", 5, 3, "*", 3, 5, "-", 2, 8, "/", 4, "*", 2, 10, "%", 3])); // deu certo [ 3,    null, null, null, null, null, null] com a validação e o null como retorno faz com que o código continue sem quebrar