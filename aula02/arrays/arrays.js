
let chamada = '';
let tarefas =[];
chamaTarefas();
function realizaTarefa(){
    if(chamada == 'a' ||chamada == 'A'){
        listaTarefas()
    }
    else if(chamada == 'R' || chamada== 'r'){
        removeTarefa()
    }
    else{
        alert('Selecione a correta.')
        chamaTarefas()
    }
}

function chamaTarefas(){
    let tarefaString ='';
    for (let i = 0; i < tarefas.length;i++){
        tarefaString +=i +'.' +tarefas[i] +'\n'
    }
    chamada =prompt(`${tarefaString}\nA -> Adicione uma tarefa \nR -> Remover uma tarefa \nOpção: `)
    realizaTarefa()
}

function listaTarefas (){
    tarefas.push(prompt("Adicione a tarefa: "))
    chamaTarefas()
}

function removeTarefa(){
    let indiceRemocao = parseInt(prompt('Indice para remoção: '))
    
    tarefas.splice(indiceRemocao,1)
    alert(`a tarefa ${indiceRemocao} foi removida.`)
    chamaTarefas()
}