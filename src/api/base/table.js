import axios from '@axios'
import transformer from '@/functions/t_pagination'
//import _ from '@lodash'
// import toast

export default async function (response, link) {
  if (response) { 
    response.data = []
    response.headers = [] 
  } 
  
  try {
    const data = await axios.post(link, response)
    return data.data
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Get persons end!') 
  }
}