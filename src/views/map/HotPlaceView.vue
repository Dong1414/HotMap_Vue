<template>
    <HotMap />
    <SideBar />
</template>
  
<script>

import HotMap from '../../component/HotMapView.vue';
import SideBar from '../../component/SideBar.vue';

export default {
    name: 'HotMapView',
    components: {
        HotMap,
        SideBar
    }    
}
</script>

<style lang="scss">
    #app {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    
      > .side-bar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
      }
    }
</style>