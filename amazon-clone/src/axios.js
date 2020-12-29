import axios from "axios";

const instance = axios.create({
    // The API (cloud functtion ) URL

   baseURL: 'https://us-central1-clone31-4e1fc.cloudfunctions.net/api'
   
});
export default instance;
//http://localhost:5001/clone31-4e1fc/us-central1/api