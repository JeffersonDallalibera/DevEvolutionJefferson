let max = 3
let min =1
let numeroaleatorio = Math.floor(Math.random()*(max-min+1)+1)
let nota1=prompt("Escolha um numero entre 1 e 3:")
if (numeroaleatorio == nota1) {
    alert('Você Acertou!')
}
else{
    alert(`Você Errou, o numero era ${numeroaleatorio}`)
}



