
numero= [];
num =''
solicitanumero()
function solicitanumero(){
    for(let i = 0; i <5;i++){
        num = parseFloat(prompt("Entre com um numero:"))
        numero.push(num)
    }
    numero.sort(function(a,b){return a -b;})

}
console.log(numero[2])


