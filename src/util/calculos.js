function calcularPicanha(qtdHomem, qtdMulher, qtdCrianca){
    const picanhaHomem = qtdHomem * 51.54;
    const picanhaMulher = qtdMulher * 34.36;
    const picanhaCrianca = qtdCrianca * 21.47;

    const picanhaTotal = picanhaHomem + picanhaMulher + picanhaCrianca;
    return picanhaTotal
}

function calcularMaminha(qtdHomem, qtdMulher, qtdCrianca){
    const maminhaHomem = qtdHomem * 30.54;
    const maminhaMulher = qtdMulher * 20.36;
    const maminhaCrianca = qtdCrianca * 12.72;

    const maminhaTotal = maminhaHomem + maminhaMulher + maminhaCrianca;
    return maminhaTotal
}

function calcularCupim(qtdHomem, qtdMulher, qtdCrianca){
    const cupimHomem = qtdHomem * 26.94;
    const cupimMulher = qtdMulher * 17.96;
    const cupimCrianca = qtdCrianca * 11.22;

    const cupimTotal = cupimHomem + cupimMulher + cupimCrianca;
    return cupimTotal
}

function calcularFile(qtdHomem, qtdMulher, qtdCrianca){
    const fileHomem = qtdHomem * 50.94;
    const fileMulher = qtdMulher * 33.96;
    const fileCrianca = qtdCrianca * 21.22;

    const fileTotal = fileHomem + fileMulher + fileCrianca;
    return fileTotal
}

function calcularContra(qtdHomem, qtdMulher, qtdCrianca){
    const contraHomem = qtdHomem * 20.94;
    const contraMulher = qtdMulher * 13.96;
    const contraCrianca = qtdCrianca * 8.72;

    const contraTotal = contraHomem + contraMulher + contraCrianca;
    return contraTotal
}

function calcularPaleta(qtdHomem, qtdMulher, qtdCrianca){
    const paletaHomem = qtdHomem * 13.74;
    const paletaMulher = qtdMulher * 9.16;
    const paletaCrianca = qtdCrianca * 5.72;

    const paletaTotal = paletaHomem + paletaMulher + paletaCrianca;
    return paletaTotal
}

function calcularLinguica(qtdHomem, qtdMulher, qtdCrianca){
    const linguicaHomem = qtdHomem * 14.46;
    const linguicaMulher = qtdMulher * 9.64;
    const linguicaCrianca = qtdCrianca * 5.72;

    const linguicaTotal = linguicaHomem + linguicaMulher + linguicaCrianca;
    return linguicaTotal
}

function calcularCoxa(qtdHomem, qtdMulher, qtdCrianca){
    const coxaHomem = qtdHomem * 7.74;
    const coxaMulher = qtdMulher * 5.16;
    const coxaCrianca = qtdCrianca * 3.22;

    const coxaTotal = coxaHomem + coxaMulher + coxaCrianca;
    return coxaTotal
}


function calcularCoracao(qtdHomem, qtdMulher, qtdCrianca){
    const coracaoHomem = qtdHomem * 19.94;
    const coracaoMulher = qtdMulher * 12.76;
    const coracaoCrianca = qtdCrianca * 7.97;

    const coracaoTotal = coracaoHomem + coracaoMulher + coracaoCrianca;
    return coracaoTotal
}


function calcularAsa(qtdHomem, qtdMulher, qtdCrianca){
    const asaHomem = qtdHomem * 15.24;
    const asaMulher = qtdMulher * 10.16;
    const asaCrianca = qtdCrianca * 6.35;

    const asaTotal = asaHomem + asaMulher + asaCrianca;
    return asaTotal
}


function calcularAgua(qtdHomem, qtdMulher, qtdCrianca){
    const aguaHomem = qtdHomem * 2;
    const aguaMulher = qtdMulher * 2;
    const aguaCrianca = qtdCrianca * 2;

    const aguaTotal = aguaHomem + aguaMulher + aguaCrianca;
    return aguaTotal
}


function calcularRefri(qtdHomem, qtdMulher, qtdCrianca){
    const refriHomem = qtdHomem * 5;
    const refriMulher = qtdMulher * 5;
    const refriCrianca = qtdCrianca * 5;

    const refriTotal = refriHomem + refriMulher + refriCrianca;
    return refriTotal
}


function calcularSuco(qtdHomem, qtdMulher, qtdCrianca){
    const sucoHomem = qtdHomem * 3.6;
    const sucoMulher = qtdMulher * 3.6;
    const sucoCrianca = qtdCrianca * 3.6;

    const sucoTotal = sucoHomem + sucoMulher + sucoCrianca;
    return sucoTotal
}


function calcularCerveja(qtdHomem, qtdMulher){
    const cervejaHomem = qtdHomem * 5.49;
    const cervejaMulher = qtdMulher * 5.49;

    const cervejaTotal = cervejaHomem + cervejaMulher;
    return cervejaTotal
}
module.exports = {
    calcularPicanha,
    calcularMaminha,
    calcularCupim,    
    calcularFile,
    calcularContra,
    calcularPaleta,
    calcularLinguica,
    calcularCoxa,
    calcularCoracao,
    calcularAsa,
    calcularAgua,
    calcularRefri,
    calcularSuco,
    calcularCerveja
}