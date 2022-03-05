let chamada = '';
chamaTarefas();
function realizaTarefa(){
    if(chamada == 'v1' ||chamada == 'V1'){
        listaTarefas()
    }
    else if(chamada == 'v2' || chamada== 'V2'){
        listaTarefasv2()
    }
    else{
        alert('Selecione a correta.')
        chamaTarefas()

    }
}

function chamaTarefas(){
    chamada =prompt('v1 ou v2:')
    realizaTarefa()
}

function listaTarefas() {
    console.log("Estudar para a prova")
    console.log("Limpar o quarto")
    console.log("Ir trabalhar")
}

function listaTarefasv2() {
    let novatarefa;
    let tarefas ='';

    // novatarefa = prompt("Adicione uma tarefa: ")
    // tarefas = `1- ${novatarefa}\n` 
    // novatarefa = prompt(`${tarefas} \n Adicione uma tarefa: `)
    // tarefas = tarefas + `2- ${novatarefa}\n` 
    // novatarefa = prompt(`${tarefas} \n Adicione uma tarefa: `)
    // tarefas = tarefas + `2- ${novatarefa}\n` 
    // alert(tarefas)

    for(let i = 0; i <3;i++){
        novatarefa = prompt(`${tarefas} \n Adicione uma tarefa: `)
        tarefas = tarefas + `${i+1}- ${novatarefa}\n` 
    }
    alert(tarefas)

}
