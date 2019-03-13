import ProfileView from "./view/ProfileView.js";
import InfoApi from "./api/InfoApi.js";

export default class App {

    constructor() {
        this.profileView = new ProfileView();
        this.infoApi = new InfoApi();
        this.loadInfo();
    }

    loadInfo() {
        this.infoApi.getUserInfo().then(userInfo => {
            const profile = {
                name: userInfo.name,
                picture: userInfo.picture,
                jobTitle: userInfo.jobTitle
            }
            this.profileView.update(profile);
        }).catch(error => {
            console.log("ocorreu um erro ao carregar as informações do usuário!");
        });
    }

}