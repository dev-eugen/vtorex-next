import { ref, onMounted, watch, computed } from 'vue' 
import {useRoute} from 'vue-router'
export default function (name) { 
    const route = useRoute()
    const entityId = route.params.id

    watch(computed(() => route.params.id), async () => {
        localStorage[name] = route.params.id 
    })
    
    return {   }
}
