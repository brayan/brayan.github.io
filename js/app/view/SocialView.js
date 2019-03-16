import BaseView from "./BaseView.js";

export default class SocialView extends BaseView {

    constructor() {
        super("#socialView");
    }

    template(socialNetworks) {
        return socialNetworks.map(social => `<a href="${social.url}"><i class="${social.icon}"></i></a>`).join("");
    }

}