const regras = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0 ) return null;
        return  a / b;
    },
    "%": (a, b) => {
        if (b === 0 ) return null;
        return  a % b;
    }
};

function machineTuring(sequencia_operacoes) {

    if (sequencia_operacoes.length % 3 !== 0) { 
        throw new Error("Array inválido: deve conter múltiplos de 3 elementos"); 
    }

    const resultados = [];

    for(let i = 0; i < sequencia_operacoes.length; i += 3){

        const[num1, operador, num2] = [
            sequencia_operacoes[i], 
            sequencia_operacoes[i + 1], 
            sequencia_operacoes[i + 2]
        ];
    
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            resultados.push(null);
            continue;
        };
     
        if(!regras[operador]) {
            resultados.push(null);
            continue;
        }

        const resultado = regras[operador](num1, num2);
        resultados.push(resultado);
    }
    return resultados;
}

console.log(machineTuring([1, "+", 2, 3, "*", 3, 5, "-", 2, 8, "/", 4, 9, "%", 3])); //deu certo [ 3, 9, 3, 2, 3 ]
console.log(machineTuring([11, "+", 2, 3, "*", 0, 5, "-", 20, 8, "/", 5, 10, "%", 3])); // deu certo [ 13, 0, -15, 1.6, 1]
console.log(machineTuring([1, "+", 2,"+", 5, 3, "*", 3, 5, "-", 2, 8, "/", 4, "*", 2, 10, "%", 3])); // throw new Error("Array inválido: deve conter múltiplos de 3 elementos");