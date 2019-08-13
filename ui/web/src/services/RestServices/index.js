import axios from 'axios';

export default class RestServices{
    constructor(){
        this.http = axios.create({
            baseURL: 'https://api-v2.liondesk.com',
            headers: {
              'Authorization': 'Bearer 11569c60db1710ad7ed25c03d80c86caaf211825',
            }
        });
    }
  
    getContacts(){
        return this.http.get("contacts");
    }
}