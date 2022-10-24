Algoritmo "Viagens Legais"

// Autor(a)    : Wilberson Roberto
Var
   pais, passageiro, cpf: vetor[1..2] de caracter
   valor: vetor[1..2] de real
   i:inteiro
   procura:caractere

Inicio

   para i <-1 ate 2 faca
      escreval("digite seu país de destino :")
      leia(pais[i])

      escreval()
      escreval("Qual o valor da viagem? :")
      leia(valor[i])

   fimpara

   para i <-1 ate 2 faca
      escreval("Qual o nome do passageiro :")
      leia(passageiro[i])

      escreval()
      escreva("Qual o seu CPF :")
      leia(cpf[i])

   fimpara

   limpatela
   escreval("Qual país quer localizar :")
   leia(procura)
   para i<- 1 ate 2 faca
      se procura = pais[i] entao
         escreval("O país encontrado foi ",pais[i]," e o valor é ",valor[i] )
      fimse
   fimpara


   escreval("Encontre um passageiro :")
   leia(procura)
   para i<- 1 ate 2 faca
      se procura = passageiro[i] entao
         escreval("O passageiro localizado foi ",passageiro[i]," cadastrado no CPF ",cpf[i] )
      fimse
   fimpara

Fimalgoritmo