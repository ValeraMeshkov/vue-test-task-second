<template>
  <div class="wrapper">

    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

body{
  margin: 0;
  color: $dark;
}

#app {
  font-family: 'Mulish', 'comic sans ms', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
