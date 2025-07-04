export const auth = {
    isAuthenticated: () => !!localStorage.getItem("token"),
    login: (token, usuario) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(usuario))
    }, //hashear o encriptar el token la forma de autenticar el token es jwt, es una libreria
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
    }
};
