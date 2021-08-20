import FetchJSON from './getApi'

export default class GetPixabay extends FetchJSON {
    base_url = 'https://pixabay.com/api/';
    api_key = '22997657-91d4620e666f378f8f41767fa';

    constructor(url) {
        super(url);
    }

    getData() {
        super.fetchData()
    }
    
}