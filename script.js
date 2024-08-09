document.addEventListener('DOMContentLoaded', function () {
    let senhaInput = document.getElementById("sen");
    senhaInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            salvar();
        }
    });

    // Display user data if available
    displayUserData();
});

function salvar() {
    let usuario = document.getElementById("log").value.toLowerCase();
    let senha = document.getElementById("sen").value;

    let usuario1 = "kennedy";
    let senha1 = "1107";

    let usuario2 = "daniel";
    let senha2 = "1234";

    if ((usuario === usuario1 && senha === senha1) || (usuario === usuario2 && senha === senha2)) {
        // Store user data in localStorage
        localStorage.setItem('loggedUser', JSON.stringify({ username: usuario, email: usuario + "@exemplo.com" }));
        window.location.href = "paginaInicial/index.html";
    } else {
        alert("Usuário não identificado");
    }
}

function displayUserData() {
    const userMenu = document.getElementById('userMenu');
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (!loggedUser) {
        const userInfoDiv = userMenu.querySelector('.user-info div');
        userInfoDiv.innerHTML = `<span>Novo por aqui??</span><span>Cadastre-se já</span>`;
    }
}

function navigateToHome() {
    window.location.href = "/";
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.classList.toggle('active');
}

function navigateToCadastro() {
    console.log("Navegar para Cadastro");
}

function navigateToTrocarSenha() {
    console.log("Navegar para Trocar Senha");
}

function navigateToEsqueciSenha() {
    console.log("Navegar para Esqueci a Senha");
}

function logout() {
    localStorage.removeItem('loggedUser');
    console.log("Sair");
}

// Fechar o menu de usuário ao clicar fora dele
window.onclick = function(event) {
    const userMenu = document.getElementById('userMenu');
    if (!event.target.matches('.nav-user img')) {
        if (userMenu.classList.contains('active')) {
            userMenu.classList.remove('active');
        }
    }
}
