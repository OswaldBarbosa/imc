'use strict'


const calcular = document.getElementById('calcular')

const imc = () => {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome == '' || altura == '' || peso == '') {
        resultado.textContent = 'Campos obrigatórios não preenchidos'
    } else {

        const imc = (peso / (altura ** 2)).toFixed(1)

        let classificacao

        if (imc < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (imc < 25) {
            classificacao = 'com o peso ideal'
        } else if (imc < 30) {
            classificacao = 'acima do peso'
        } else if (imc < 35) {
            classificacao = 'com obesidade grau 1'
        } else if (imc <  40) {
            classificacao = 'com obesidade grau 2'
        } else {
            classificacao = 'com obesidade grau 3'
        }
        
            resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`

        }

    }

    calcular.addEventListener('click', imc)