package main

import (
	"fmt"
	"log"
	"os"
)

var (
	cara, coroa int
)

func cond() {
	a, b := 10, 13

	if a > b {
		fmt.Println("a é maior que b")
	} else if a < b {
		fmt.Println("a é menor do que b")
	} else {
		fmt.Println("a e b são iguais")
	}

	switch {
	case a > b:
		fmt.Println("a é maior que b")

	case a < b:
		fmt.Println("a é menor do que b")

	default:
		fmt.Println("a e b são iguais")
	}

	file, err := os.Open("hiii.txt")
	if err != nil {
		log.Panic(err)
	}

	data := make([]byte, 100)
	if _, err := file.Read(data); err != nil {
		log.Panic(err)
	}

	fmt.Println(string(data))

}

func lancarMoeda(lado string) {
	switch lado {
	case "cara":
		cara++

	case "coroa":
		coroa++

	default:
		fmt.Println("caiu em pé")
	}
}
