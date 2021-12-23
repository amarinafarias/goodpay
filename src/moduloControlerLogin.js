import userLogin from "./moduloDados.js";
import comunicacaoModal from "./moduloComunicacaoDados.js";

class ControlerUserLogin {      ///vai habilitar os elementos que serão possíveis visualizar.
    constructor(status) {
        this.status = status;
    }
    checkLogin() {                  //pra saber se o usuário está logado
        this.status = true;

    }
    checkOutLogin(){               //para atualizar os valores do construtor
        this.status = false;
    }    
    loginInfo(user, senha) {
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
    
        if (user===null || user==="" || senha===null || senha===""){
            this.checkOutLogin();
            localStorage.status=this.status 
               return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "camposVazios1"));
        }else{
            if (!infoCheck){
                this.checkOutLogin();
                localStorage.status=this.status;
                return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "usuarioNaoExiste1"));
            }else{
            if (infoCheck.senha === senha) {
                this.checkLogin();
                localStorage.status=this.status;
                return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "loginExecutado1"));
            } else {
                this.checkOutLogin();
                localStorage.status=this.status;
                return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "falhaLogin1"));
            }
        }
    }
}
}
const controlerUserLogin = new ControlerUserLogin(); // a constante recebe o mesmo nome da Class, mas sendo a primeira letra minúscula
export default controlerUserLogin;
