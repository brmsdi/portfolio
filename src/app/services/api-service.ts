import axios from "axios";


export function gcsystemInit() {
    return axios.get("https://gcsystemws.onrender.com/api/v1/web")
}