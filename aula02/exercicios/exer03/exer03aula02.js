numero= [];

solicitanumero()
function solicitanumero(){
    for(let i = 0; i <5;i++){
        numero.push (parseFloat(prompt("Entre com um numero:")));
    }

}
let elementomaisfrequente =numero[0];
let frequenciaElementoMaisFrequente =1;
for(let i=0;i<5;i++){
    let NumCandidato =numero[i];
    let frequenciaCandidato = 0;

    for (let j=0; j<5;j++){
        if(numero[j]===NumCandidato){
            frequenciaCandidato ++

        }
    }
    if(frequenciaCandidato > frequenciaElementoMaisFrequente){
        elementomaisfrequente =NumCandidato
        frequenciaElementoMaisFrequente = frequenciaCandidato
    }
}
alert(`o elemento ${elementomaisfrequente} é o mais frequente e aparece ${frequenciaElementoMaisFrequente} vezes`)