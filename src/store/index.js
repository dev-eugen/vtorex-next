import { createStore } from 'vuex'
import user from './modules/user'
import toast from './modules/toast'
import config from './config/index'

const store = createStore({
    modules: {
        toast,
        user,
        config
    },
})

export default store
