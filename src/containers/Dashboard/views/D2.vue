<template>
    <div> 
        <div @click="show = true">
        показать
        </div>
            <modal v-model="show" width="w-8/12">
                <Attestation></Attestation>
            </modal>
    </div>
</template>

<script setup>
    import Attestation from '../../../components/uniprops/Persons/Adaptation/Attestation.vue'
    import {
        ref
    } from 'vue'
    const show = ref(false)
</script>

<style lang="scss" scoped>

</style>