import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import get from '@api'

export default function (_route) {
    const isLoad = ref(true)

    const route = useRoute()
    const entityId = route.params.id
 
 
    const data = ref({})

    const load = async () => {
        isLoad.value = true  
        console.log('----------', _route(entityId));
        data.value = await get(_route(entityId))  
        data.value = data.value 
        console.log('load by id');
        isLoad.value = false
    }

    onMounted(async () => {
        await load() 
        
    })

    return {
        data,
        isLoad,
        id: entityId
    }
}
