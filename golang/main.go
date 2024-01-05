// sempre precisamos de um ponto de entrada, todo programa precisa de um pacakge main
// uma das regras é, dentro da mesma pasta não podemos ter mais de um package, precisamos deixar os packages em pastas separadas
// além do package main ele espera uma função chamada main
package main

import (
	"fmt"
	"strconv"
)

var (
	nome string //variavel a nivel de package, é disponível a qualquer arquivo dentro do package
	n1   int    //vai declarando as variáveis assim
	N2   int32  //essa variável consegue ser usada em outros packages fazendo o import do package main por ex. pra isso precisa ser tudo maiusculo
)

func main() {
	mensagem := "testeeeee"          //atribuindo string direto
	var message string = "testeeeee" //equivalente
	fmt.Println(mensagem)
	fmt.Println(message)

	var a, b, c int32
	var f, s, bool = 3.2, "string", true
	fmt.Println(a, b, c, f, s, bool)

	var total int
	total++
	fmt.Println(total)

	hello("Luiz Eduardo")
	fmt.Println(sum(10, 5))

	//jeito simples de fazer swap
	var x, y = 10, 20
	fmt.Println(x, y)
	x, y = y, x
	fmt.Println(x, y)

	total, err := convertAndSum(10, "21") //aqui eu seto o tipo vindo da função
	fmt.Println(total, err)
}

func hello(nome string) {
	fmt.Println("Hello", nome, "!")
}

func sum(a, b int) int { //o int fora dos parenteses é pra tipar o retorno
	return a + b
}

func convertAndSum(a int, b string) (total int, err error) { //seto os tipos de retorno
	i, err := strconv.Atoi(b) //eu tenho que tratar o erro, se não quiser tratar tenho que deixar err como _
	if err != nil {
		return //o return vai voltar todos os parametros que eu setei ali em cima
	}
	//aqui eu atribui b ao i depois de converter e tem o que seria um catch de .Atoi ali, o _ ou err
	total = a + i
	return //aqui ele retorna nil no err porque não foi atribuido nada, apenas declarado lá na inicialização
}

//funções que começam em minusculo são de escopo do package, quando começam com letra maiúscula estou fazendo export delas
