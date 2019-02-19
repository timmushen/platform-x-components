<template>
  <div class="p-3 h-12 mb-4">
    <nuxt-link to="/" class>
      <img :src="src" alt>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style scoped>
</style>