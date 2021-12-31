/**
 * calcula o montante em juros compostos
 * @param {double} capital 
 * @param {double} taxa 
 * @param {double} tempo 
 * @returns montante (double)
 */
function compostInterestMontante(capital,taxa,tempo){
    let montante = 0;

    montante = parseFloat(capital) * (Math.pow(1 + parseFloat(taxa) / 100 , parseFloat(tempo)));

    return montante;
    
    }
    


/**
 * calcula o o valor dos juros total em juros compostos
 * @param {double} capital 
 * @param {double} taxa 
 * @param {double} tempo 
 * @returns juros (double)
 */
function compostInterestJuros(capital,taxa,tempo){

    let juros = 0;

    juros = compostInterestMontante(capital,taxa,tempo) - capital;

    return juros;
}


/**
 * calcula taxa em juros compostos
 * @param {double} capital 
 * @param {double} montante 
 * @param {double} tempo 
 * @returns taxa (double)
 */
function compostInterestTaxa(capital,montante,tempo){
    let taxa = 0;

    taxa = 100 * ((Math.pow(montante / capital,(1 / tempo))) - 1);

    return taxa;
}


/**
 * calcula o capital inicial em juros compostos
 * @param {double} montante 
 * @param {double} taxa 
 * @param {double} tempo 
 * @returns capital (double)
 */
function compostInterestCapital(montante,taxa,tempo){
    let capital = 0;

    capital = montante / Math.pow(((taxa / 100) + 1),tempo);

    return capital;
}


/**
 * calcula o tempo em juros compostos
 * @param {double} capital 
 * @param {double} taxa 
 * @param {double} tempo 
 * @returns tempo (double)
 */
function compostInterestTempo(capital,montante,taxa){
    let log1 = Math.log10(montante / capital);

    let log2 = Math.log10((taxa / 100) + 1);

    let tempo = log1 / log2;

    return tempo

}


