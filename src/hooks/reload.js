import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import get from '@api'

export default function (_route) {
    const isLoad = ref(true)
    const isReload = ref(true)


    const route = useRoute()
    const entityId = route.params.id


    const data = ref({})

    const load = async (id) => {
        isLoad.value = true  
        isReload.value = true 
        data.value = await get(_route(id))  
        isLoad.value = false
        isReload.value = false
    }

    onMounted(async () => {
        await load(entityId) 
        
    })

    return {
        data,
        isLoad,
        id: entityId,
        isReload,
        load
    }
}
