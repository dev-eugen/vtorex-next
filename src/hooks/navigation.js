import navigation_data from '../data/navigation'
import router from '@/router'
import {useRoute} from 'vue-router'
import { ref, watch,onMounted, computed } from 'vue'
import store from "@/store"
export default function() {
    const route = useRoute()
    const isLoad = ref(true)
    
    const navigation = ref([]) 
    watch(() => route.fullPath, () => {   
        navigation.value = navigation_data(store.state.config.config)
    })
 

    onMounted(async () => {
        isLoad.value = true   
        navigation.value = navigation_data(store.state.config.config)
        findActive(route.meta.uname)
        isLoad.value = false
    })


    const findActive = name => {  
        navigation.value.forEach(first => { 
            first.child.forEach(seconsd => {
                seconsd.child.forEach(third => {
                    if (third.uname == name) {
                        third.current = true
                        seconsd.current = true
                        first.current = true
                        return
                    } 
                }) 
                if (seconsd.uname == name) {
                    seconsd.current = true
                    first.current = true
                    return
                } 
            })
            if (first.uname == name) {
                first.current = true
                return
            } 
        })
    }

    watch(
      () => route.fullPath,
      (count, prevCount) => {
        navigation.value.forEach(first => {
            first.current = false 
            first.child.forEach(seconsd => {
                seconsd.current = false 
                seconsd.child.forEach(third => {
                    third.current = false 
                })
            })
        })
        findActive(route.meta.uname)
      }
    )

    const linkTo = (route, router) => { 

        navigation.value.forEach(first => {
            first.current = false 
            first.child.forEach(seconsd => {
                seconsd.current = false 
                seconsd.child.forEach(third => {
                    third.current = false 
                })
            })
        })

 
        router.push(route.href)   
 
      }


    return { navigation, findActive, linkTo }
}