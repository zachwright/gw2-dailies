<template>
  <div class="home">
    <HelloWorld msg="These are today's Guild Wars 2 Dailies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
