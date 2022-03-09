let firstName;
let n1;
let n2;
let n3;
let n4;

function calcular() {
    firstName = document.getElementById("name").value;

    let media = (n1 + n2 + n3 + n4) / 4;

    if (media >= 6 && media <= 10) {
        document.getElementById("result").innerHTML = `${firstName}, você está <font color = #00FF00>Aprovado</font>, sua média foi de ${media.toFixed(1).toString()}`
    } else if (media >= 4 && media <= 5.9) {
        document.getElementById("result").innerHTML = `${firstName}, você está <font color = #FAD921>recuperação</font>, sua média foi de ${media.toFixed(1).toString()}`
    } else if (media >= 0 && media <= 3.9) {
        document.getElementById("result").innerHTML = `${firstName}, você está <font color = #F51900>reprovado</font>, sua média foi de ${media.toFixed(1).toString()}`
    } else{
        document.getElementById("result").innerHTML = `Nota inválida`
    }
}

function validarNotas() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);
    n4 = parseFloat(document.getElementById("n4").value);

    if (isNaN(n1) || n1 < 0 || n1 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 1`;
        return;
    }

    if (isNaN(n2) || n2 < 0 || n2 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 2`;
        return;
    }

    if (isNaN(n3) || n3 < 0 || n3 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 3`;
        return;
    }

    if (isNaN(n4) || n4 < 0 || n4 > 10) {
        document.getElementById("result").innerHTML =
            `Digite uma nota válida no campo nota 4`;
        return;
    }

    calcular()
}

