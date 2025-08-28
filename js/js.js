function evaluar(i) {
    document.querySelector("#result").value += i;
}

function clearPantalla() {
    document.querySelector("#result").value = "";
}

function resultadoFinal() {
    let a = document.querySelector("#result").value;
    let b = eval(a);

    document.querySelector("#result").value = b;
    return b;
}   