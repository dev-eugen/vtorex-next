import { create } from "lodash";

export default {
    namespased: true,
    state: {
        list: [
            // {"data":{"message":"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e!"},"component":"toast"}
        ]
    },
    getters: () => { },
    mutations: { 
        toast_create (state, payload) { 
            state.list.push(payload)
        },
        toast_delete (state, i) { 
            state.list.splice(i, 1)
        }            
     },
    actions: () =>  {  }
};