
/* Função para o calculo do juros simples 

capital = float
taxa = float
tempo = float

retorna o valor do da parcela de juros, os juros total e o valor total com os juros (capital +(n)juros)*/


function simpleInterestMontant(capital,taxa,tempo){
    let juros = 0;

    juros = parseFloat(capital.value) * parseFloat(tempo.value) * parseFloat(taxa.value) / 100;

    return alert(`Juros Simples:\n O juros é de ${juros}\n O valor total será de ${parseFloat(capital.value) + juros}`);
}

/* Função para calculo descobbrir a taxa de juros no juros simples quando se tem o valor final e se procura a taxa de juros
capital = float
montante = float
tempo = float

retorna a taxa de juros(%) */

function simpleInterestJuros(capital,montante,tempo){
    let taxa = 0;

    taxa = ((parseFloat(montante.value) - parseFloat(capital.value)) / (parseFloat(capital.value) * parseFloat(tempo.value))) * 100

    return alert('taxa ' + taxa)
}


/* Função para calculo descobbrir o tempo para se chegar a um montante em juros simples
capital = float
montante = float
taxa = float
retorna o tempo em valor conforme o tipo de juros (ex. se juros for ao mes tempo será em mes)  */

function simpleInterestTempo(capital,montante,taxa){
    let tempo = 0;

    tempo = ((parseFloat(montante.value) - parseFloat(capital.value)) / (parseFloat(capital.value) * parseFloat(taxa.value))) * 100

    return alert('tempo ' + tempo)
}

function startFunc(capital,taxa,tempo,montante){
    simpleInterestMontant(capital,taxa,tempo);
    simpleInterestJuros(capital,montante,tempo);
    simpleInterestTempo(capital,montante,taxa);

    //compostInterest(capital,taxa,tempo)
}