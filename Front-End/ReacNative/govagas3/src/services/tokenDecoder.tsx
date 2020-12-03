interface Token {
    email: string,
    unique_name: string,
    jti: number,
    Role: string,
    iss: string,
    aud: string
}

function parseJwt(token: string): Token | null {
    try {
        if (token === null || token === undefined) return null;

        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.log('ERROR in TokenDecoder: ' + error.message);
        return null;
    }
}

export default parseJwt;