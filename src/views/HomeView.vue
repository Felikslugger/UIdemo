<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="150" height="150">
    <HelloWorld msg="Welcome to Your HomePage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
<style>
  img {
    filter: drop-shadow(7px 7px 14px #d0d0d0);
  }
</style>
