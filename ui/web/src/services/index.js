
import axios from 'axios';

export default class Services{
    createContact (contact){
        return axios.post("https://api-v2.liondesk.com/contacts", 
        contact,
        { 
            headers:{ Authorization: 'Bearer' + proccess.env.VUE_APP_ACCESS_TOKEN }
        });
    }
};
