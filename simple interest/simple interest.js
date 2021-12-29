function simpleInterest(capital,taxa,tempo){
    let juros = 0;
    juros = parseFloat(capital.value) * parseFloat(tempo.value) * parseFloat(taxa.value) / 100;
    return alert(`Juros Simples:\n O juros é de ${juros}\n O valor total será de ${parseFloat(capital.value) + juros}`);


}

function compostInterest(capital,taxa,tempo){
let montante = 0;
montante = parseFloat(capital.value)*(Math.pow(1+parseFloat(taxa.value)/100,parseFloat(tempo.value)))
return alert(`Juros Compostos:\n O valor dos juros é: ${montante - capital.value}\n O montante final será de ${montante}`)

}


function startFunc(capital,taxa,tempo){
    simpleInterest(capital,taxa,tempo);
    compostInterest(capital,taxa,tempo)
}