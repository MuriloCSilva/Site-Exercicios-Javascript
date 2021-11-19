function insert(numero) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function del() {
    var char = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = char.substring(0, char.length - 1)
}

function calc() {
    var char = document.getElementById('resultado').innerHTML;
    if (char) {
        document.getElementById('resultado').innerHTML = eval(char)
    }
}