import axios from 'axios';

export default class RestServices{
    constructor(){
        this.http = axios.create({
            baseUrl: process.env.VUE_APP_BASE_URL,
            headers:{ Authorization: `Bearer ${proccess.env.VUE_APP_ACCESS_TOKEN}` }
        })
    }
  
    getContacts(){
        return this.http.get("contacts"); 
    }
  
    createContact (contact){
        return axios.post("contacts", contact);
    }
  
    getContact(id) {
        return this.http.get(`/contacts/${id}`);
    }

    deleteContact(id) {
        return this.http.delete(`/contacts/${id}`);
    }
}
