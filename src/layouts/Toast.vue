<template>
    <div class="z-30"> 
        <div aria-live="assertive" class="absolute inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <component v-for="(t, i) in toasts" :key="i" v-bind="t.data" :is="t.component ?? 'toast'" @close="del(i)"></component>  
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        useStore
    } from 'vuex'
    import {
        computed
    } from 'vue'
    const store = useStore()


    const del = (i) => store.commit('toast_delete', i)

    const toasts = computed(() => store.state.toast.list)
</script>

<style lang="scss" scoped>

</style>