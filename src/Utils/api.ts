import { Globals } from "./globals";
import { TokenActions } from "../reducers/token-reducer";

export class API {
    //Login API
    public static logIn(mail: string, password: string,dispatch: React.Dispatch<TokenActions>): Promise<boolean> {
        return fetch(Globals.serverUrl + "/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: mail,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {   
                dispatch({type:"add-token",payload:{token:data.token}})
                return true;
            } else if (data.code === 401) {
                Globals.messageError = "Los datos introducidos no son correctos";
            } else if (data.code === 404) {
                Globals.messageError = "No existe ninguna cuenta con ese correo electrónico, primero cree una cuenta";
            } else {
                Globals.messageError = "dialog";
            }
            return false;
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return false; 
        });
    }

    //Register a new accountç
    public static register(name : string, mail : string, password : string,dispatch: React.Dispatch<TokenActions>): Promise<boolean> {
        return fetch(Globals.serverUrl + "/create_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: mail,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.error)
            if (data.code === 201) {   
                dispatch({type:"add-token",payload:{token:data.token}})
                return true;
            } else if (data.code === 400) {
                Globals.messageError = "Los datos no son correctos";
            }else if (data.code === 409) {
                Globals.messageError = "El correo electrónico ya existe";
            } else if (data.code === 500) {
                Globals.messageError = "Algo fue mal, intentelo más tarde";
            } else {
                Globals.messageError = "dialog";
            }
            return false;
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return false; 
        });
    }
}
