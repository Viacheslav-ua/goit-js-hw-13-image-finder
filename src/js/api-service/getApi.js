export default class FetchJSON {
    constructor(url, obj) {
        this.url = url;
        this.obj = obj;

    }

    fetchData() {
        fetch(this.url, this.obj).then(response => response.json());
    }
}