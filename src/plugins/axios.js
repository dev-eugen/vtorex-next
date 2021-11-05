import axios from 'axios'


const fetch = axios.create({
   baseURL: import.meta.env.VITE_PORT,
   headers: {
      Authorization: "Bearer " + localStorage.access_token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   }
})

export default fetch