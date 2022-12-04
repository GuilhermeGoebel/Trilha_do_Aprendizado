var n1, n2, total, cont=0

n1=parseFloat(prompt("Digite um valor: "))
n2=parseFloat(prompt("Digite outro valor: "))
total = n1-n2
alert("A subtração do primeiro valor pelo segundo valor é igual à "+total)
document.write("<h2>"+"O resultado da subtração é "+total+"</h2>")


n1=parseFloat(prompt("Digite um valor: "))
n2=parseFloat(prompt("Digite outro valor: "))
total = n1*n2
alert("A multiplicação dos dois valores é igual à "+total)
document.write("<h2>"+"O resultado da multiplicação é "+total+"</h2>")


n1=parseFloat(prompt("Digite um valor: "))
while(cont==0){
    n2=parseFloat(prompt("Digite outro valor: "))
    if(n2==0)
    {
        alert("Por favor, digite outro valor, pois não existe divisão por 0.")
    }
    else{
        total=n1/n2
        cont=1;
    }
}

alert("A razão entre o primeiro valor e o segundo valor é igual à "+total)
document.write("<h2>"+"O resultado da divisão é "+total+"</h2>")




