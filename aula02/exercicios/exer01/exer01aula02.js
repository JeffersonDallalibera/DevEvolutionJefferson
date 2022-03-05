
let nomes= [];
let solicName =''
solicitaNomes()
function solicitaNomes(){
    for(let i = 0; i <3;i++){
        solicName = prompt("Entre com 3 nomes:")
        nomes.push(solicName)
    }
}
nomes.sort()
alert(`${nomes[0]}\n${nomes [1]}\n${nomes [2]}`);