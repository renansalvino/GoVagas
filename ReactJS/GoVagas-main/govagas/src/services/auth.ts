export const Jwt = () => {
    
    var token = localStorage.getItem('token-govagas');
    
    if(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
}
