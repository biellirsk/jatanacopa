function enviar() {
    let nome = document.getElementById("nomeCompleto").value
    if (nome == "") {

        document.getElementById("nomeCompleto").classList.add("is-invalid")
    }
    let dataNascimento = document.getElementById("dataNascimento").value
    //alert(dataNascimento)
    if (dataNascimento == "") {

        document.getElementById("dataNascimento").classList.add("is-invalid")
    }

    let email = document.getElementById("email").value
    if (email =="") {
        document.getElementById("email").classList.add("is-invalid")
    }
}