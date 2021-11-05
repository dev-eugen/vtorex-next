import _ from 'lodash'

import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import * as  lodash from 'lodash'
import list from '@api'
export default function (_route, start_data) {
    const isLoad = ref(true)
    const isReload = ref(true)
 

    const data = ref(start_data ? start_data : null) 

    const load = async () => {
        isReload.value = true
        if (data.value != null || data.value != undefined) {

        } 
        console.log(list)
        data.value = await list(_route, lodash.cloneDeep(data.value))
        isReload.value = false
    }

    const start = async () => {
        isLoad.value = true
        isReload.value = true
        if (data.value != null || data.value != undefined) { 
        }  
        data.value = await list(_route, data.value)
        console.log('table load')
        isReload.value = false,
        isLoad.value = false
    }
 

    onMounted(async () => {
        await start()
    })

    return {
        data,//:  data.value != null ? data.value.map(e => e.data.body.selected = false) : [],
        load,
        isReload,
        isLoad
    }



}