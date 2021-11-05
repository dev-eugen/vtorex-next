import Modal from "./Modal.vue" 
import Loading from "./loading/Loading.vue" 
import Toast from "./notifications/Toast.vue" 


export default app => { 
  app.component("toast", Toast) 
  app.component("loading", Loading) 
  app.component("modal", Modal) 
}