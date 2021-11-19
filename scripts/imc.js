function calcIMC() {
    let altura = parseFloat(document.getElementById('inputAltura').value);
    let peso = parseFloat(document.getElementById('inputPeso').value);

    let imc = (peso / (altura * altura)).toFixed(1)
    console.log(imc)

    if (imc < 18.5) {
        window.alert(`IMC: ${imc}\nClassificação: Magreza.\nGrau de obesidade: 0`)
    }
    else if (imc >= 18.5 && imc < 24.9) {
        window.alert(`IMC: ${imc}\nClassificação: Normal.\nGrau de obesidade: 0`)
    }
    else if (imc >= 25.0 && imc < 29.9) {
        window.alert(`IMC: ${imc}\nClassificação: Sobrepeso.\nGrau de obesidade: I`)
    }
    else if (imc >= 30 && imc < 39.9) {
        window.alert(`IMC: ${imc}\nClassificação: Obesidade.\nGrau de obesidade: II`)
    }
    else if (imc > 40.0) {
        window.alert(`IMC: ${imc}\nClassificação: Obesidade Grave.\nGrau de obesidade: III`)
    }
    else {
        window.alert("Erro! Faça o teste novamente")
    }

}