
/* Função para o calculo do juros em juros simples 

capital = float
taxa = float
tempo = float

retorna somente o valor total dos juros*/


function simpleInterestJuros(capital,taxa,tempo){
    let juros = 0;

    juros = parseFloat(capital) * parseFloat(tempo) * parseFloat(taxa) / 100;

    return juros;
}

/* calcula o valor do montante final utilizando juros simples
capital = float
taxa = float
tempo = float
retorna o valor do montante*/


function simpleInterestMontante(capital,taxa,tempo){
    let montante = 0;

    montante =  simpleInterestJuros(capital,taxa,tempo) + capital

    return montante
}


/* Função para descobbrir a taxa de juros no juros simples quando se tem o valor final e se procura a taxa de juros
capital = float
montante = float
tempo = float

retorna a taxa de juros(%) */

function simpleInterestTaxa(capital,montante,tempo){
    let taxa = 0;

    taxa = ((parseFloat(montante) - parseFloat(capital)) / (parseFloat(capital) * parseFloat(tempo))) * 100;

    return taxa;
}


/* Função para descobbrir o tempo para se chegar a um montante em juros simples
capital = float
montante = float
taxa = float
retorna o tempo em valor conforme o tipo de juros (ex. se juros for ao mes tempo será em mes)  */

function simpleInterestTempo(capital,montante,taxa){
    let tempo = 0;

    tempo = ((parseFloat(montante) - parseFloat(capital)) / (parseFloat(capital) * parseFloat(taxa))) * 100;

    return tempo;
}


/* cacula o capital necessario para chegar a um montante em juros simples
tempo = float
montante = float
taxa = float
retona o capital inicial*/

function simpleInterestCapital(montante,tempo,taxa){
    let capital = 0;

    capital = (montante / ((tempo * (taxa / 100)) + 1)).toFixed(2);

    return capital;
}

