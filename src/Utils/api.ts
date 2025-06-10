import { Globals } from "./globals";
import { TokenActions } from "../reducers/token-reducer";
import User from "../models/user";
import Films from "../models/films";
import Film from "../models/film";
import Starts from "../models/starts";
import Platform from "../models/platform";
import Genres from "../models/genres";
import TV from "../models/tv";
import TVDetail from "../models/tvDetail";

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
            } else if (data.code === 409) {
                Globals.messageError = "No existe ninguna cuenta con ese correo electrónico, primero cree una cuenta";
            }else if (data.code === 405) {
                Globals.messageError = "Algo fue mal";
            }else if (data.code === 500) {
                Globals.messageError = "El servidor no funcionó correctamente";
            }else {
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
    public static register(name : string, mail : string, password : string,dispatch: React.Dispatch<TokenActions>): Promise<string> {
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
            if (data.code === 201) {
                dispatch({type:"add-token",payload:{token:data.token}})
                return data.token;
                
            } else if (data.code === 400) {
                Globals.messageError = "Los datos no son correctos";
              
            }else if (data.code === 409) {
                Globals.messageError = "El correo electrónico ya existe";
                
            } else if (data.code === 500) {
                Globals.messageError = "Algo fue mal, intentelo más tarde";
               
            } else {
                Globals.messageError = "dialog";
                
            }
            return 'mail';
            
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return ""; 
        });
    }

    //Register a new accountç
    public static insertList(idFav : number, idShow : number,token:string): Promise<boolean> {
        return fetch(Globals.serverUrl + "/insert_list.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
                idFav: idFav,
                idShow: idShow,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === 201) {
                return true
            }
            return false;
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return false; 
        });
    }

    //Get Data user with Token
    public static getDataUser(token : string): Promise<User | null> {
        return fetch(Globals.serverUrl + "/get_data_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {   
                return User.fromJson(data.user)
            } else if (data.code === 400) {
                Globals.messageError = "Los datos no son correctos";
            }
            return null;
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return null; 
        });
    }

    //Modify data user
    public static modifyDataUser(token : string, name:string, mail:string): Promise<boolean> {
        return fetch(Globals.serverUrl + "/modify_data_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
                name:name,
                mail:mail
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === 202) {  
                Globals.messageError = "Los datos se actualizaron con éxito"; 
                return true;
            } else if (data.code === 401) {
                Globals.messageError = "Algo salió mal, intentalo más tarde";
            }
            return false;
        })
        .catch(error => {
            console.log(error);
            Globals.messageError = "Error de conexión con el servidor";
            return false; 
        });
    }

    //Get Films in Cinema
    public static getFilmsCinema(page:number):Promise<Films[]>{
        return fetch(`${Globals.serverApi}3/movie/now_playing?api_key=${Globals.apiKey}&language=es&page=${page}&watch_region=ES`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data.results.map((item: any) => Films.fromJson(item));
        })
        .catch(error => {
            console.log(error);
           
        });
    }

    //Get Films in Cinema
    public static getFilmsPopular(page:number):Promise<Films[]>{
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
        const formattedDate = threeMonthsAgo.toISOString().split('T')[0];
        return fetch(`${Globals.serverApi}3/discover/movie?api_key=${Globals.apiKey}&language=es&sort_by=popularity.desc&release_date.lte=${formattedDate}&page=${page}&watch_region=ES`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data.results.map((item: any) => Films.fromJson(item));
        })
        .catch(error => {
            console.log(error);
           
        });
    }

     //Get Specified item
     public static getStreamDetail(id:number,type:string):Promise<Film|TVDetail>{
         return fetch(`${Globals.serverApi}3/${type}/${id}?api_key=${Globals.apiKey}&language=es`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
            if(type==="movie"){
                return Film.fromJson(data)
            }else{
                return TVDetail.fromJson(data)
            }
           
        })
        .catch(error => {
            console.log(error)
            throw error
           
        });
     }

     //Get Films in Cinema
    public static getStarts(id:number, type:string):Promise<Starts[]>{
        return fetch(`${Globals.serverApi}3/${type}/${id}/credits?api_key=${Globals.apiKey}&watch_region=ES`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data.cast.map((item: any) => Starts.fromJson(item));
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Get Trailer
    public static getTrailer(id:number, type:string):Promise<string>{
        return fetch(`${Globals.serverApi}3/${type}/${id}/videos?api_key=${Globals.apiKey}&language=es`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
            if(data.results.length>0){
                return data.results[0].key
            }else{
                return ""
            }
           
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Get Platforms
    public static getPlatforms(type:string):Promise<Platform[]>{
        return fetch(`${Globals.serverApi}3/watch/providers/${type}?api_key=${Globals.apiKey}&watch_region=ES`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data.results.map((item: any) => Platform.fromJson(item));
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Get Genres Stream
    public static getGenresPlatforms(type:string):Promise<Genres[]>{
        return fetch(`${Globals.serverApi}3/genre/${type}/list?api_key=${Globals.apiKey}&language=es`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data.genres.map((item: any) => Genres.fromJson(item));
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Get Film Stream Genre
    public static getStreamPlatformsGenres(type:string,idStream:number,idGenre:number,page:number):Promise<Films[]|TV[]>{
        return fetch(`${Globals.serverApi}3/discover/${type}?api_key=${Globals.apiKey}&language=es&sort_by=vote_count_desc&watch_region=ES&with_watch_providers=${idStream}&with_genres=${idGenre}&page=${page}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
            if(type==="movie"){
                return data.results.map((item: any) => Films.fromJson(item));
            }else{
                return data.results.map((item: any) => TV.fromJson(item));
            }
           
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    
    //Create list of movie at tv
    public static createList(name:string,description:string):Promise<number>{
        return fetch(`${Globals.serverApi}3/list`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Globals.token}`
            },
            body: JSON.stringify({
                "name": `${name}`,
                "language": "es",
                "description": `${description}`,
                "public": false
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            return data.list_id
           
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Get id List Show
    public static getIdListShow(token:string):Promise<number>{
        return fetch(`${Globals.serverUrl}/get_list_more.php`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Globals.token}`
            },
            body: JSON.stringify({
                "token": `${token}`,
            })
        }).then(response => response.json())
        .then(data => {
            return data.id
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }
    //Get id List Fav
    public static getIdListFav(token:string):Promise<number>{
        return fetch(`${Globals.serverUrl}/get_list_fav.php`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Globals.token}`
            },
            body: JSON.stringify({
                "token": `${token}`,
            })
        }).then(response => response.json())
        .then(data => {
            return data.id
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }
    //Insert item in a List
    public static insertItemFilm(idList:number,idFilm:number):Promise<number>{
        return fetch(`${Globals.serverApi}3/list/${idList}/add_item`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Globals.token}`
            },
            body: JSON.stringify({
                "media_id": `${idFilm}`,
            })
        }).then(response => response.json())
        .then(data => {
            return data.status_code
        })
        .catch(error => {
            console.log(error);
            throw error
        });
    }

    //Remove Movie List
    public static removeItemFilm(idList: number, idFilm: number): Promise<number> {
    return fetch(`${Globals.serverApi}3/list/${idList}/remove_item?api_key=${Globals.apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Globals.token}`
        },
        body: JSON.stringify({
            media_id: idFilm
        })
    })
    .then(response => response.json())
    .then(data => {
        return data.status_code;
    })
    .catch(error => {
        console.log("Error al quitar ítem:", error);
        throw error;
    });
}



        public static checkItemFilm(idList: number, idFilm: number): Promise<boolean> {
        return fetch(`${Globals.serverApi}3/list/${idList}/item_status?movie_id=${idFilm}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Globals.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            return data.item_present;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
    }


    //Get Films in Cinema
    public static getFilmsList(idList:number):Promise<Films[]>{
        return fetch(`${Globals.serverApi}3/list/${idList}?api_key=${Globals.apiKey}&language=es`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
        .then(data => {
           return data?.items.map((item: any) => Films.fromJson(item));
        })
        .catch(error => {
            console.log(error);
           
        });
    }

    //Get Temporal token
    public static createSessionId(requestToken: string): Promise<string> {
        return fetch(`${Globals.serverApi}3/authentication/session/new?api_key=${Globals.apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                request_token: requestToken
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                return data.session_id;
            } else {
                throw new Error("No se pudo crear el session_id");
            }
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
    }

    //Change password with mail
    public static changePassword(mail: string):Promise<boolean> {
        return fetch(Globals.serverUrl + "/send_password.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: mail,
            }),
        })
        .then(response => response.json())
        .then(() => {
            return true
        })
        .catch(error => {
            console.log(error);
            return false; 
        });
    }

    //Change password with token
    public static modifyPassword(password: string, token:string):Promise<boolean> {
        return fetch(Globals.serverUrl + "/update_password.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
                password: password,
            }),
        })
        .then(response => response.json())
        .then((data) => {
            if(data.code===202){
                return true
            }else{
                return false
            }
            
        })
        .catch(error => {
            console.log(error);
            return false; 
        });
    }





}
