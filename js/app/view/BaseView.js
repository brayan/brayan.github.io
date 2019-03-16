export default class BaseView {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    update(viewModel) {
        this.element.innerHTML = this.template(viewModel);
    }

    template(viewModel) {
        throw new Error("The template method must be overridden");
    }

}