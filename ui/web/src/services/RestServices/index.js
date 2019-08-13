import axios from 'axios';

export default class RestServices{
    getContacts(){
        return axios.get("https://api-v2.liondesk.com/contacts", {
            headers: {
                Authorization: "Bearer 11569c60db1710ad7ed25c03d80c86caaf211825"
            }
        });
    }
}