//retorna booleano
export const usuarioAutenticado = () => localStorage.getItem('tokengovagas') !==null;

export const parseJwt = () =>{
    var token = localStorage.getItem('tokengovagas');

    if(token){
        var base64url = token.split('.')[1];

        var base64 = base64url.replace(/-/g, '+').replace(/-/g, '/');

        return JSON.parse(window.atob(base64));
    }
}