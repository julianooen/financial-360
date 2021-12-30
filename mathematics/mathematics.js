/**
 *  função para calculo da média de n número separados por vírgula
 *  arr = number (numeros separados por virgula)
 * return media de n termos
 */
function media(...arr){
    let media = arr.reduce((total, elemento) => total + elemento) / arr.length;

    return (media);
}


/**
 * calcula o fatorial de um número
 * term = integer > 0 
 * return fatorial = integer
 */

function factorial(term){
    if(term <= 1){

        return 1;

    }else{

        return (term * (factorial(term - 1)));
    }
}

/**
 * descobre o enesimo termo de uma progressao aritimetica
 * @param {integer} termo1 
 * @param {integer} razao 
 * @param {integer} termoPos 
 * @returns termo de um PA na posição n
 */

function progArit(termo1, razao, termoPos){
    let enesimoTermo = termo1 + razao * (termoPos - 1);

    return (enesimoTermo);

}

/**
 * soma todos os termos de uma progressao aritimética
 * @param {integer} termo1 
 * @param {integer} nTermos 
 * @param {integer} termoFim 
 * @returns o somatorio de uma PA de n termos
 */

function sumProgArit(termo1, nTermos, termoFim){
    let sumTermos = (nTermos * (termo1 + termoFim))/2;

    return (sumTermos);
}

/**
 * descobre o enesimo termo de uma progressao geometrica
 * @param {integer} termo1 
 * @param {integer} razao 
 * @param {integer} termoPos 
 * @returns termo de um PG na posição n
 */

function progGeo(termo1, razao, termoPos){
    let enesimoTermo = termo1 * (Math.pow(razao,(termoPos-1)));

    return enesimoTermo;
}


/**
 * soma todos os termos de uma progressao geometrica
 * @param {integer} termo1 
 * @param {integer} nTermos 
 * @param {integer} termoFim 
 * @returns o somatorio de uma PG de n termos
 */


function sumProgGeo(termo1, razao, nTermos){
    let sumTermos = (termo1 * (Math.pow(razao, nTermos) - 1 )) / (razao - 1);

    return sumTermos
}


/**
 * probabilidade simples (chance de ocorrer algo sabendo o total de resultados e a quantidade de resultados pretendidos)
 * @param {integer} myChoice 
 * @param {integer} totalChoices 
 * @returns chance de ocorrencia
 */

function probability(myChoice, totalChoices){
    let result = myChoice / totalChoices;

    return result;
}

/**
 * calcula o numero de combinações possiveis de um numero de elementos(n) sendo que somente alguns podem ser escolhidos(p), e n nao se repete assim como a ordem importa(ex.: 123 != 321)
 * @param {integer} n 
 * @param {integer} p 
 * @returns o numero de combinações 
 */

function arranjoSimples(n,p){
    let arrSimp = factorial(n) / factorial(n-p);

    return arrSimp;
}

/**
 * calcula o numero de combinações possiveis de um numero de elementos(n) sendo que somente alguns podem ser escolhidos(p), e n PODE repitir assim como a ordem importa(ex.: 123 != 321)
 * @param {integer} n 
 * @param {integer} p 
 * @returns 
 */

function arranjoRepeticao(n,p){
    let arrRep = Math.pow(n,p);

    return arrRep;
}

console.log(arranjoSimples(10,3))



// sem repetição e oredm nao importa 123==321
function combSimples(n,p){
    let combSim = factorial(n) / (factorial(p) * factorial(n-p));

    return combSim;
}

console.log(combSimples(60,6))

//com repetição e ordem nao importa 123==321
function combRepeticao(n,p){
    let combRep = factorial(n+p-1) / (factorial(p) * factorial(n-1));

    return combRep;
}

console.log(combRepeticao(60,6))