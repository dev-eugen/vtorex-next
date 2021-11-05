import permition  from "./permition"
import toast  from "./toast"

export default app => {
    app.use(toast) 
    app.use(permition) 
}