let primeiroNumero = null;
let operacao = null;
let aguardandoSegundoNumero = false;
let ultimaOperacao = null;
let ultimoSegundoNumero = null;


const display = document.getElementById("display");

const numeros = document.querySelectorAll(".number");

numeros.forEach(function (botao) {
    botao.addEventListener("click", function () {

        if (aguardandoSegundoNumero) {
            display.textContent = botao.textContent;
            aguardandoSegundoNumero = false;
        }

        else if (display.textContent.trim() === "0") {
            display.textContent = botao.textContent;
        } 
        
        else {
            display.textContent += botao.textContent;
        }

    });
});


const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", function () {

    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }

})

const porcentagem = document.getElementById("percent");

porcentagem.addEventListener("click", function () {
    const numeroAtual = Number(display.textContent);

    if (primeiroNumero !== null && operacao !== null) {

        if (operacao === "+" || operacao === "-") {
            display.textContent = primeiroNumero * (numeroAtual / 100);
        } else {
            display.textContent = numeroAtual / 100;
        }

    } else {
        display.textContent = numeroAtual / 100;
    }
});

const operadores = document.querySelectorAll(".operator");

operadores.forEach(function (botao) {
    botao.addEventListener("click", function () {
        if (
            primeiroNumero !== null &&
            operacao !== null &&
            !aguardandoSegundoNumero
        ) {
            const segundoNumero = Number(display.textContent);
            let resultado;

            if (operacao === "+") resultado = primeiroNumero + segundoNumero;
            else if (operacao === "-") resultado = primeiroNumero - segundoNumero;
            else if (operacao === "x") resultado = primeiroNumero * segundoNumero;
            else if (operacao === "÷") resultado = primeiroNumero / segundoNumero;

            display.textContent = resultado;
            primeiroNumero = resultado;
        } else {
            primeiroNumero = Number(display.textContent);
        }

        operacao = botao.textContent;
        aguardandoSegundoNumero = true;
    })
})

const igual = document.getElementById("equals");

igual.addEventListener("click", function () {
    let segundoNumero;
    let operacaoUsada;

    if (operacao !== null && primeiroNumero !== null) {
        segundoNumero = Number(display.textContent);
        operacaoUsada = operacao;
    } else if (ultimaOperacao !== null && ultimoSegundoNumero !== null) {
        segundoNumero = ultimoSegundoNumero;
        operacaoUsada = ultimaOperacao;
    } else {
        return;
    }

    let resultado;

    if (operacaoUsada === "+") resultado = primeiroNumero + segundoNumero;
    else if (operacaoUsada === "-") resultado = primeiroNumero - segundoNumero;
    else if (operacaoUsada === "x") resultado = primeiroNumero * segundoNumero;
    else if (operacaoUsada === "÷") {
        if (segundoNumero === 0) {
            display.textContent = "Impossivel dividir por zero idiota!";
            return;
        }

        resultado = primeiroNumero / segundoNumero;
    }

    display.textContent = resultado;

    primeiroNumero = resultado;

    ultimaOperacao = operacaoUsada;
    ultimoSegundoNumero = segundoNumero;

    operacao = null;
    aguardandoSegundoNumero = true;
});

const clear = document.getElementById("clear");

clear.addEventListener("click", function () {
    display.textContent = "0";
    primeiroNumero = null;
    operacao = null;
    aguardandoSegundoNumero = false;
})

const sinal = document.getElementById("sign");

sinal.addEventListener("click", function () {
    const numeroAtual = Number(display.textContent);

    display.textContent = numeroAtual * -1;
})