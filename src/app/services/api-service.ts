import axios from "axios";

export function gcsystemInit() {
    return axios.get("https://gcsystem-latest.onrender.com/api/v1/web")
}