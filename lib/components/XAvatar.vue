<template>
  <div>
    <img
      class="block h-8 border-2 border-gray-700 rounded-full mx-auto mb-4 hover:border-gray-400 hover:border-2 shadow-inner"
      :src="src"
      alt
    >
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style scoped>
</style>