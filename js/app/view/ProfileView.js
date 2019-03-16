import BaseView from "./BaseView.js";

export default class ProfileView extends BaseView {

    constructor() {
        super("#profileView");
    }

    template(profile) {
        return `
            <img src="${profile.picture}" alt="Profile Picture" id="img-profile" class="img-circle" />
            <h1 class="main-title">${profile.name}</h1>
            <h2 class="secundary-title">${profile.job}</h2>
            <p class="email">${profile.email}</p>
        `; 
    }

}