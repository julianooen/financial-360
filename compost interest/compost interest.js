




function compostInterest(capital,taxa,tempo){
    let montante = 0;
    montante = parseFloat(capital.value)*(Math.pow(1+parseFloat(taxa.value)/100,parseFloat(tempo.value)))
    return alert(`Juros Compostos:\n O valor dos juros é: ${montante - capital.value}\n O montante final será de ${montante}`)
    
    }
    
    