let primeirNumero = null;
let operacao = null;
let aguardandoSegundoNumero = false;

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

        primeiroNumero = Number(display.textContent);
        operacao = botao.textContent;
        aguardandoSegundoNumero = true;

        
    })
})

const igual = document.getElementById("equals");

igual.addEventListener("click", function () {
    const segundoNumero = Number(display.textContent);

    let resultado

    if (operacao === "+") {
        resultado = primeiroNumero + segundoNumero;
    }

    else if (operacao === "-") {
        resultado = primeiroNumero - segundoNumero;
    }

    else if (operacao === "x") {
        resultado = primeiroNumero * segundoNumero;
    }

    else if (operacao === "÷") {
        if (segundoNumero === 0) {
            display.textContent = "Impossivel dividir por zero idiota!";
            return;
        }
        resultado = primeiroNumero / segundoNumero;
    }

    display.textContent = resultado;
})

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