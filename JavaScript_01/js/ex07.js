var cpf, idade, nome

nome=prompt("Digite o seu nome: ")
idade=parseInt(prompt("Digite sua idade: "))
alert("Bem vindo "+nome+"! Você tem "+idade+" anos.")
if(idade>=18)
{
    cpf=prompt("Informe o seu CPF")
    alert("O seu CPF é "+cpf+".")
}
else
{
    alert("Você é menor de idade!")
}