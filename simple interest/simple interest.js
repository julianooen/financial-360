function simpleInterest(capital,taxa,tempo){
    let juros = 0;
    juros = parseFloat(capital.value) * parseFloat(tempo.value) * parseFloat(taxa.value) / 100;
    return alert(`O juros é de ${juros}\n O valor toda será de ${parseFloat(capital.value) + juros}`);
}