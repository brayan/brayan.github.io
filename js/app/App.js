import ProfileView from "./view/ProfileView.js";
import SocialView from "./view/SocialView.js";
import InfoApi from "./api/InfoApi.js";

export default class App {

    constructor() {
        this.profileView = new ProfileView();
        this.socialView = new SocialView();
        this.infoApi = new InfoApi();

        this.loadInfo();
    }

    loadInfo() {
        this.infoApi.getUserInfo().then(info => {
            const profile = {
                name: info.name,
                picture: info.picture,
                job: info.job,
                email: info.email
            };

            this.profileView.update(profile);
            this.socialView.update(info.social);
            
        }).catch(error => {
            console.error("There was an error loading information ", error);
        });
    }

}