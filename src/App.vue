<template>
  <div id="app">
    <Appheader />
    <router-view />
    <!-- <font-awesome-icon :icon="['fab', 'facebook']"/>
    <font-awesome-icon :icon="['fab', 'twitter']"/> -->
    <Appfooter />
  </div>
</template>

<script>
  
  import Appheader from '@/components/global/AppHeader.vue';
  import Appfooter from '@/components/global/Footer.vue';

  export default {
    components: {
      Appheader,
      Appfooter
    },
  };

</script>

<style>
	
</style>
