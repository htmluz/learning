package main

import "fmt"

func loops() {
	nomes := []string{"claudio", "Fernando", "afdhiuosiohdjsjiosda"}
	for k, nome := range nomes {
		fmt.Println(k, nome)
	}
}
