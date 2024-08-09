function navigateToHome() {
    window.location.href = "./../paginainicial/index.html";
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.classList.toggle('active');
}

function navigateToProfile() {
    console.log("Navegar para o Perfil");
}

function navigateToSettings() {
    console.log("Navegar para Configurações");
}

function logout() {
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
