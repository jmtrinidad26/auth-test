export const msalConfig = {
    auth:{
        clientId:"27445b35-7917-43b3-958d-9c0c0ab04763",
        authority:"https://login.microsoftonline.com/832d9c51-678d-4065-bda6-f4aa69ee20fc",
        redirectUri: "http://localhost:3000",
    },
    cache:{
        cacheLocation:"LocalStorage",
        storeAuthStateInCookie:true, // true if issues in edge
    },

};
export const loginRequest = {
    scopes: ["User.Read"],
};