function cadastraEmail() {
    var nome = document.getElementById("name");
    var email = document.getElementById("email"); 

    var dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if (dados == null){
        localStorage.setItem("dadosCliente", "[]");  
        dados = [];
    }

    var auxRegistro = {
        cliente: nome.value,
        contato: email.value
    }
    dados.push(auxRegistro);

    localStorage.setItem("dadosCliente",JSON.stringify(dados));
    alert("Cadastro efetuado com sucesso!")

    nome.value ="";
    email.value="";

}
