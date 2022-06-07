
var bota = document.querySelector("button");
bota.addEventListener("click", calculaNota);

function calculaNota() {

    var notas = document.getElementById("nota").value
    var faltas = document.getElementById("falta").value

    if(faltas > 4) {
        alert("Reprovado por faltas")
    }
    if(notas > 7 && faltas < 4) {
        alert("Aprovado");
    } 
    if(notas < 7 && faltas <4) {
        alert("Foi para o exame")
        redirect()
    }
}

function redirect() {
    var notas = document.getElementById("nota").value
    notaExame = prompt("Digite a nota do exame","")
    if((notaExame+notas)/2 > 7) {
        alert("Você foi aprovado por exame")
    } else {
        alert("Você foi reprovado por exame")
    }
}
