import axios from 'axios';


export const saveEmail = async (email: string): Promise<any> => {
    return axios.put(`https://api.jsonbin.io/v3/b/65e1dc8a266cfc3fde919313`, {
        users: email
    }, {
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$uizdA.Y4LbwCBztAiAhvO.kVlMnhT4BFjyLIB/TR9kU1d/Xv4ln.O",
            "X-Access-Key": "$2a$10$4obMtBOeZilsrfwgC3D/je9ilvH.czOC8HhGfi6/Glfx.JwRWj6We",
        }
    }).then(response => response.data)
}