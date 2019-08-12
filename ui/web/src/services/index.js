
import axios from 'axios';

export default class Services{
    get(){
        return axios.get("http://jsonplaceholder.typicode.com/todos");
    }
}