var numeroSecreto = parseInt(Math.random() * 1001)

var chute = prompt("Digite um número entre 1 e 1000.")


while(chute != numeroSecreto) {

  var chute = prompt("Digite um número entre 0 e 1000.")
 
  if (chute == numeroSecreto) {
     alert("Acertou!")
  }

  else if (chute > numeroSecreto) {
    alert("Errou... O número secreto é menor.")
  }

  else if (chute < numeroSecreto) {
    alert("Errou... O número secreto é maior.")
  }

}
 