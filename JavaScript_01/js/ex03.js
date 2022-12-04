var nome, n1, n2, soma
nome=prompt("Informe seu nome: ")
n1=parseFloat(prompt(nome+", por favor digite um valor: "))
n2=parseFloat(prompt(nome+", por favor digite outro valor: "))
soma = n1+n2
alert(nome+", o resultado é "+ soma)
document.write("<h2>"+nome+", o resultado é "+soma+"</h2>")