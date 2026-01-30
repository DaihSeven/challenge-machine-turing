/**
 * 1° VERSÃO: IF/ELSE
 * Simples, direta, mas difícil escalar
 * fita → array de entrada
 * cabeça de leitura → índice
 * regras → loop condicional de operações
 * estado → resultado gerado
 * 
 */
function maquinaTuring(operacoes){
let resultados = [ ];

for(let i = (0); i < operacoes.length; i += 3) {

    let operador1= operacoes[i];
    let operador= operacoes[i+1]
    let operador2= operacoes[i+2]
    let resultado;

    if( operador ===  "+" ){
        resultado = operador1 + operador2;
    } else if( operador === "-" ){
        resultado = operador1 - operador2;
    } else if( operador === "*" ){
        resultado = operador1 * operador2;
    } else if( operador === "/" ){
        resultado = operador1 / operador2;
    } else if( operador === "%" ){
        resultado = operador1 % operador2;
    } else {
        resultado = null;
    }
    resultados.push(resultado);
    }

return resultados;
}
console.log(maquinaTuring([1, "+", 2, 3, "*", 3, 5, "-", 2, 8, "/", 4, 9, "%", 3 ]));// [ 3, 9, 3, 2, 0 ]
console.log(maquinaTuring([11, "+", 2, 3, "*", 0, 5, "-", 20, 8, "/", 5, 10, "%", 3])); // deu certo [ 13, 0, -15, 1.6, 1 ] o que sobrou foi 1  retornou
console.log(maquinaTuring([1, "+", 2,"+", 5, 3, "*", 3, 5, "-", 2, 8, "/", 4, "*", 2, 10, "%", 3])); // [3,    null, null, null, null, null, null] mesmo sem validação e não quebra o código
