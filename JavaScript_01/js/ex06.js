var n

n=parseFloat(prompt("Digite um valor: "))

if(n%7==0 && n%3!=0)
{
    alert("O número informado é divisível por 7.")
}

if(n%3==0 && n%7!=0)
{
    alert("O número informado é divisível por 3.")
}

if(n%7==0 && n%3==0)
{
    alert("O número informado é divisível por 7 e por 3.")
}

if(n%7!=0 && n%3!=0)
{
    alert("O número informado não é divisível por 7 nem por 3.")
}