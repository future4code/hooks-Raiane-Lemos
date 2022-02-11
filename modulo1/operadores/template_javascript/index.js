/* CODIGO 1 : O resultado será false em A, 
false em B, 
true em C pois pede o oposto do resultado '!resultado' 
e undefined em D, pois não foi atribuida a nenhuma variável.*/

/* CODIGO 2 : O codigo não exibe o resultado esperado no console pois o retorno da função
prompt() é sempre uma string, então a adição fará a concatenação de ambas.
Para somar os números precisa converter a variável para um tipo numérico, 
para isso usaremos o parseInt().
Exemplo: */

let primeiroNumero = prompt('Digite um numero!')
let segundoNumero  = prompt("Digite outro numero!")
function soma() {
const soma = parseInt(primeiroNumero) + parseInt(segundoNumero);

alert('' + soma) ;
}
soma()

//Programa1

let idadeDoUser = prompt('Qual a sua idade?')
let idadeDamig = prompt('Qual a idade de sua/seu melhor amiga(o)?')
console.log('Sua idade é maior do que a do seu melhor amigo?')
//Tentei inserir as respostas true ou false mas aparece erro no console//
function subtrair() {
const subtrair = parseInt(idadeDamig)  - parseInt(idadeDoUser);

alert('' - subtrair) ;
}
subtrair()

//Programa2

let numeroPar = prompt('Insira um numero par!')
let resultado = numeroPar
let numQueDivide = 2
let resto = resultado / numQueDivide
function divisao() {
 const dividir = parseInt(resultado)   / parseInt( numQueDivide ) ;

 alert('' / dividir) ;
 }
 divisao()

 //Programa3

 let idadeEmAnos = prompt('Qual sua idade em anos?')
 
 let multiplicaçao = idadeEmAnos
 let idadeEmMeses = 12
 let idadeEmDias = 365 
 let idadeEmHoras = 8760
 
 function multiplicaçao() {
 const multiplicaçao  = parseInt( idadeEmAnos ) * parseInt( idadeEmMeses ) ; 
  alert('' * multiplicaçao ) ;    
 }
 multiplicaçao()

 function multiplicaçao() {
    
 const multiplicaçao = parseInt( idadeEmAnos ) * parseInt( idadeEmDias ) ; 
 alert('' * multiplicaçao ) ;    
}
multiplicaçao()

function multiplicaçao() {

const multiplicaçao = parseInt( idadeEmAnos ) * parseInt(idadeEmHoras ) ;
alert('' * multiplicaçao ) ;    
}
multiplicaçao() 

//Esse codigo rodou apresentando erro na linha 55/56 pórem não consigo achar uma solução*/

//Programa4

let primeiroNum = prompt('Digite um numero!')
let segundoNum = prompt('Insira outro numero!')
let resposta = primeiroNum
let resposta2 = segundoNum
console.log = prompt('O primeiro numero é maior que o segundo?')
primeiroNum > segundoNum
console.log(true)
segundoNum <= primeiroNum
console.log(false)
console.log = prompt('O primeiro numero é igual ao segundo')
primeiroNum == segundoNum
console.log(true)
primeiroNum == segundoNum
console.log = prompt('O primeiro numero é divisível pelo segundo?')
primeiroNum / segundoNum
console.log(true)
primeiroNum /! segundoNum
console.log(false)
console.log = prompt('O segundo numero é divisível pelo primeiro?')
segundoNum / primeiroNum
console.log(true)
segundoNum /! primeiroNum

/*Acredito que esse primero codigo esteja totalmente errado entao fiz o segundo 'modelo'
 muita dificuldade nesse exercicio.*/

let primeiroNum = prompt('Digite um numero!')
let segundoNum = prompt('Insira outro numero!')

function solucao() {
    primeiroNum > segundoNum 
    const verdade = true
    primeiroNum <= segundoNum
    const falso = false 
    console.log = prompt('O primeiro numero é maior que o segundo?' , true , false ) ;    
 }

