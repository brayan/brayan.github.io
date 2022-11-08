const BASE_API = "https://brayan.com.br/api";

export default class ProfileApi {
    
    async fetchProfile() {
        return fetch(`${BASE_API}/profile`).then(response => response.json());
    }

}