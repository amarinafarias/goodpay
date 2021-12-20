import controlerUserLogin from "./moduloInterface.js";
//Elementos de Avisos para uso do Bootstrap: Modal Toast, Alert.Trazendo elementos do Bootstrap paara uso no Main Javascript
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
//Trazendo os botões da DOM em HTML

const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    //Testando se os campos não estão vazios.
    if(!user || user===null || user==="" || !senha || senha===null || senha===""){
        alert ("Campos Vazios, não há como executar o login."); 
        document.getElementById("titleModal").innerHTML="Campos vazios";
        document.getElementById("bodyModal").innerHTML="Os campos não podem estar vazios!";
        document.getElementById("btnModalClose").innerHTML="Fechar";
        document.getElementById("btnModalSave").innerHTML="Salvar";
        myModal.show();

    }else{
        controlerUserLogin.loginInfo(user, senha);
    }
});