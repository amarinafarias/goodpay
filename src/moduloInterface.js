import userLogin from "./moduloDados.js";

class ControlerUserLogin {      ///vai habilitar os elementos que serão possíveis visualizar.
    constructor(status) {
        this.status = status;
    }
    checkLogin() {                  //pra saber se o usuário está logado
        this.status = true;

    }
    loginInfo(user, senha) {
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        console.log(infoCheck);

        if (!infoCheck) {
            alert("Usuário não existe!");

        } else {
            console.log(infoCheck);
            if (infoCheck.senha === senha) {
                this.checkLogin();
                alert(`Você está:${this.status}`);
            } else {
                alert("Não Logou!");
            }
        }
    }
}
const controlerUserLogin = new ControlerUserLogin(); // a constante recebe o mesmo nome da Class, mas sendo a primeira letra minúscula
export default controlerUserLogin;
