import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";
//Elementos de Avisos para uso do Bootstrap: Modal Toast, Alert.Trazendo elementos do Bootstrap paara uso no Main Javascript
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
//Ordem para executar e validar o login
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha); // da o alerta se o login foi ou mão realizado e o porque

    document.getElementById("titleModal").innerHTML=alertModal.title;
    document.getElementById("bodyModal").innerHTML=alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML=alertModal.b1;
    document.getElementById("btnModalSave").innerHTML =alertModal.b2;

    myModal.show();

    setTimeout(carregarPagina, 5000); //tempo de espera para iniciar a função carregarPagina.

    function carregarPagina(){
        window.location.href=controleRotasApp.validaRota(localStorage.status, alertModal.idModal);
    }
});

//Ordem para criar um novo usuário
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event)=>{
    window.location.href=controleRotasApp.validaRota("false", "usuarioNaoExiste1");
})