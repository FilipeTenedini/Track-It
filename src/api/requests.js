import { BASE_URL } from "./url";
import axios from "axios";

const apiRequests = {
    register: function register(obj) {
        axios
            .post(`${BASE_URL}/auth/sign-up`, obj)
            .then(() => console.log("/"))
            .catch(err => alert(err.data.message));
    },
    login: function login(obj){
        axios
            .post(`${BASE_URL}/auth/login`, obj)
            .then(() => console.log("/hoje"))
            .catch(err => alert(err.data.message));
    }
}