import store from '@/store'
const install = app => {
    app.config.globalProperties.$toast = (data) => {  
        store.commit('toast_create', data)//(data)
    }
}
  
  export { install as default }