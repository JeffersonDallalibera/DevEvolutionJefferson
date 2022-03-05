function ehPar(){
    console.log("chamou a função")
    let num1 = prompt("Entre com um numero para saber se é par ou nao:")
    if(num1 %2 ==0){
        alert("este numero é par")
    }
    else{
        alert("este numero é impar")
    }
    teste = document.getElementById(tarefa)

}

function getRaizesFuncaoQuadratica(a,b,c){
    console.log("chamou a função")
    let raizes=[];
    let delta = b *b -4*a*c
    if (delta === 0){
        let raiz = -b /(2*a)
        raizes.push(raiz)
    }
    else if (delta >0){
        let raiz1 = (-b + Math.sqrt(delta)) / (2*a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2*a);
        raizes.push(raiz1, raiz2)
    }
    return raizes

    teste = document.getElementById(tarefa) 

}
console.log(getRaizesFuncaoQuadratica(1,-4,5));
console.log(getRaizesFuncaoQuadratica(4,-4,5));
console.log(getRaizesFuncaoQuadratica(1,-5,6));

function adicionatarefa(){
    alert("inseriu")
}
function listaTarefas (){
    tarefas.push(prompt("Adicione a tarefa: "))
    chamaTarefas()
}
