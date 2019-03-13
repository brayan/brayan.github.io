export default class ProfileView {

    constructor() {
        this.element = document.querySelector("#profileView");
    }

    update(profileInfo) {
        this.element.innerHTML = template(profileInfo);
    }

}

const template = (profile) => {
    return `
            <img src="${profile.picture}" alt="Profile Picture" id="img-profile" class="img-circle" />
            <h1 class="main-title">${profile.name}</h1>
            <h2 class="secundary-title">${profile.job}</h2>
        `; 
}