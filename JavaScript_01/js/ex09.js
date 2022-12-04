var n, cont=0;

while(cont==0)
{
    n=parseInt(prompt("Digite um valor de 1 a 7: "))
    if(n>7 || n<1)
    {
        alert("Por favor, digite um valor de 1 a 7, pois a semana só possui 7 dias.")
    }
    else{
        cont=1;
    }
}

switch(n)
{
    case 1:
    {
        alert("Domingo")
        break
    }
    case 2:
    {
        alert("Segunda-feira")
        break
    }
    case 3:
    {
        alert("Terça-feira")
        break        
    }
    case 4:
    {
        alert("Quarta-feira")
        break
    }
    case 5:
    {
        alert("Quinta-feira")
        break
    }
    case 6:
    {
        alert("Sexta-feira")
        break
    }
    case 7:
    {
        alert("Sábado")
        break
    }
}
