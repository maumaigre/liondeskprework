
import axios from 'axios';

export default class RestServices{
    constructor(){
        this.http = axios.create({
            baseUrl: process.env.VUE_APP_BASE_URL,
            headers:{ Authorization: 'Bearer' + proccess.env.VUE_APP_ACCESS_TOKEN }
        })
    }

    createContact (contact){
        return axios.post("contacts", contact);
    }
};
