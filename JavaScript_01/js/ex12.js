var v=[81,100,88,40]

//alert(v)
v[1]=150
//alert(v)

lista=["Zeca",80,"Rua A","Irati", "PR", 1900, true]
alert(lista)

for(var i=0;i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"</h2>")
}

lista.push("84430-000")//Adiciona elemento na última posição.
lista.pop()//Remove o último da lista.