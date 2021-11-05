import { create } from "lodash";

export default {
    namespased: true,
    state: {
        config: {}
    },
    getters: {
        config (state){
            return state.config
        }
    },
    mutations: { 
        update_card (state, payload) {   
            state.config[payload.name] = payload.id
            localStorage[payload.name] = payload.id
        },
        setup_config (state) {   
            const config = JSON.stringify(localStorage) 
            state.config =  JSON.parse(config)
        }   
     },
    actions: () => {}
};