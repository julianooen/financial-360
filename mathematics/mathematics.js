/**
 *  função para calculo da média de n número separados por vírgula
 *  arr = number (numeros separados por virgula)
 * return media de n termos
 */
function calcMedia(...arr){
    let mediaResult = arr.reduce((total, elemento) => total + elemento) / arr.length;

    return (mediaResult);
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





// sem repetição e oredm nao importa 123==321
function combSimples(n,p){
    let combSim = factorial(n) / (factorial(p) * factorial(n-p));

    return combSim;
}



//com repetição e ordem nao importa 123==321
function combRepeticao(n,p){
    let combRep = factorial(n+p-1) / (factorial(p) * factorial(n-1));

    return combRep;
}


/**
 * calculo da moda == numeros que mais repetem em uma amostra(numeros separados por virgula)
 * @param  {integer} args 
 * @returns Array de numeros
 */
function calcModa(...args){
    let count = { };
    let maior = 0;
    let modaFim = [];

    args.sort((a,b) => a - b);

    for(let i = 0 ; i < args.length ; i++ ){
        
        !count.hasOwnProperty(args[i]) ? count[args[i]] = 1 : count[args[i]]++ ;
        
        if(count[args[i]] > maior){
            maior = count[args[i]];
            moda = args[i];

        }else if (count[args[i]] == maior){
            modaFim.push(args[i]);
            
        }
    }

    return modaFim;
}



/**
 * mediana - numeros centrais de uma amostra de numeros separados por virgula
 * @param  {integer} args 
 * @returns integer
 */

function calcMediana(...args){
    let medianaResult = 0;

    args.sort((a,b) => a - b);

    if(args.length % 2 != 0){
        medianaResult = args[Math.floor(args.length/2)];
    }else{
        medianaResult = (args[(args.length / 2) - 1] + args[(args.length / 2)]) / 2
    }
    return medianaResult;
}

/**
 * calcula a variancia em um conjunto de numeros
 * @param  {integer} args 
 * @returns double
 */

function calcVariancia(...args){
    let mediaV = calcMedia(...args);
    let acumulador = 0;
    let varResult;

    for(let i = 0 ; i < args.length ; i++){
        acumulador+= Math.pow((args[i]-mediaV),2);
    }
    
    varResult = acumulador / args.length;

    return varResult;
}

/**
 * calcula o desvio padrao em um conjunto de numeros
 * @param  {integer} args 
 * @returns double
 */

function calcDesvioPadrao(...args){
    let desvioPadraoResult;

    desvioPadraoResult = Math.pow(calcVariancia(...args),1/2);

    return desvioPadraoResult;

}

