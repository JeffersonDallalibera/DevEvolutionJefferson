
let inputNovaTarefa = document.getElementById('desc-nova-tarefa');
let botaoAddTarefa = document.getElementById('add-tarefa');
let divListaTarefas = document.getElementById('lista-tarefas');
let tarefas = []
function renderizaTarefa(){
    let descNovaTarefa = inputNovaTarefa.value
    let tarefasString ='';
    for (let i = 0 ; i < tarefas.length;i++){
        tarefasString +=(i+1)+'. '+tarefas[i]+'<br/>';

    }
    divListaTarefas.innerHTML= tarefasString;
}
botaoAddTarefa.addEventListener('click',function(){
    let descNovaTarefa = inputNovaTarefa.value
    tarefas.push(descNovaTarefa)
    renderizaTarefa();
    inputNovaTarefa ='';
})

inputDescNovaTarefa.addEventListener('keypress', function(event){
    if(event.key==='Enter'){
        console.log('ENTER')
    }
})