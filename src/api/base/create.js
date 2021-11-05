import axios from '@axios' 

export default async function(route, data) {
    try {
        const res = await axios.post(route, data)
        console.log(res)
        console.log('Successfly created ' + route)
    } catch (error) {
        console.log(error)
        console.log('Failed created ' + route)
        
    } finally {
        console.log('Created end ' + route)
    }
}
