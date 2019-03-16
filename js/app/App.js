import InfoApi from "./api/InfoApi.js";
import ProfileView from "./view/ProfileView.js";
import SocialView from "./view/SocialView.js";

export default class App {

    constructor() {
        this.setUp();
        this.loadInfo();
    }

    setUp() {
        this.infoApi = new InfoApi();
        this.profileView = new ProfileView();
        this.socialView = new SocialView();
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
            
        }).catch(error => console.error(error));
    }

}