let senhaInput = document.getElementById("sen");
senhaInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        clicar();
    }
});

function salvar() {
    let usuario = document.getElementById("log").value.toLowerCase();
    let senha = document.getElementById("sen").value;

    let usuario1 = "kennedy";
    let senha1 = "1107";

    let usuario2 = "daniel";
    let senha2 = "1234";

    if ((usuario === usuario1 && senha === senha1) || (usuario === usuario2 && senha === senha2)) {
        window.location.href = "./../";
    } else {
        alert("Usuário não identificado");
    }
}