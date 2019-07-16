import PortfolioApi from "./api/ProfileApi.js";
import ProfileView from "./view/ProfileView.js";
import SocialView from "./view/SocialView.js";

export default class App {

    constructor() {
        this.setUp();
        this.loadInfo();
    }

    setUp() {
        this.profileApi = new PortfolioApi();
        this.profileView = new ProfileView();
        this.socialView = new SocialView();
    }

    loadInfo() {
        this.profileApi.fetchProfile().then(data => {
            const profile = {
                name: data.name,
                picture: data.picture,
                job: data.job,
                email: data.email
            };

            this.profileView.update(profile);
            this.socialView.update(data.social);

        }).catch(error => console.error(error));
    }

}