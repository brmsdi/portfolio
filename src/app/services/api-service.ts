import axios from "axios";


export function gcsystemInit() {
    return axios.get("https://systemgc.netlify.app/login/")
}