const BASE_API = "https://raw.githubusercontent.com/brayan/portfolio-data/master/";

export default class PortfolioInfoApi {
    
    getPortfolioInfo() {
        return fetch(`${BASE_API}info.json`).then(response => response.json());
    }

}