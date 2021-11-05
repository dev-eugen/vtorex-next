<template>
  <div id="app" @dragover.prevent @drop.prevent>
    <toast-layer>
      <!--<component :is="layout">-->
        <router-view></router-view>
      <!--</component>-->
    </toast-layer>
  </div>
</template>
<script>
  import store from '@/store'
  import SideMenu from '@/layouts/SideMenu.vue'
  import ToastLayer from '@/layouts/Toast.vue'
  import Empty from '@/layouts/Empty.vue'
  export default {
    components: {
      // SideMenu,
      ToastLayer
    },
    computed: {
      layout() {
        return `${this.$route.meta.layout}`
      }
    },
    setup(props) {
      // store.commit('setup_config')



      return {
        store
      }
    }
  }
</script>