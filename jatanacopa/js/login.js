document.getElementById("loginbutton").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Pegando os valores dos campos
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Verificando se o email e a senha são corretos
    if (email === "iacwave@gmail.com" && senha === "12345") {
        window.location.href = "home.html"; // Redireciona para a página home
    } else {
        alert("E-mail ou senha incorretos!"); // Exibe uma mensagem de erro
    }
});
