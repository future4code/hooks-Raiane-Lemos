/*No primeiro exercicio será impresso no console 10 para A e 5 para B pois o valor pode ser
alterado caso a variavel tenha sido declarada com let.*/
/*No segundo exercicio a mensagem do console diz que o valor de C não foi declarado porem EU acredito que o valor foi alterado para 10 já que C é igual A que vale 10.*/
/*No terceiro exercício os melhores nomes para variáveis: horasDeTrabalho valorRecebidoPorDia/valorRecebidoPorHora*/

/*O comando typeof retornou com a resposta undefined dos tipos das variáveis pois o valor delas ainda não havia sido atribuido*/

/*Após atribuir um valor a cada variável declarada e executar o comando typeof ele retornou com as respostas, dizendo que tanto a variável nome quanto a variável idade são strings.*/
 
let nome = raiane
let idade = 19
console.log(typeof nome)
console.log(typeof idade)
const nome = prompt('Qual é o seu nome?')
const idade = prompt('Qual a sua idade?')
console.log(typeof nome);
console.log(typeof idade);
console.log("Olá nome, você tem idade anos")

  /*notei que o valor da variavel nome e da variavel idade nao ficaram armazenadas pois quando peço para imprimir no console as respostas nao aparecem*/

let cordaroupa = prompt('Você está de preto hoje?')
var sim = cordaroupa
console.log('Você está de preto hoje? sim')
let oculos = prompt('Você usa oculos?')
var sim = oculos
console.log('Você usa oculos? sim')
let pet = prompt('Você tem um pet de estimação?')
var nao = pet
console.log('Você tem um pet de estimação? nao') /*aqui tudo ok, eu acho*/

let a = 10
let b = 25
let c = 0

let a = c
let b = a
let c = b
console.log("O novo valor de a é", b) /*o novo valor de a é 25*/
console.log("O novo valor de b é", a) /*o novo valor de b é 10*/
