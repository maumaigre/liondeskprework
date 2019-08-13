
import axios from 'axios';

const BASE_URL = "https://api-v2.liondesk.com";
const API_Key = "";

export default class RestServices {
    get() {
        return axios.get("http://jsonplaceholder.typicode.com/todos");
    }

    getContact(id) {
        return axios.get(`${BASE_URL}/contacts/${id}`, {
            headers: {
                Authorization: `Bearer ${API_Key}`,
                'content-type': 'application/json'
            }
        });
    }
}