<template>
  <div class="hover:bg-gray-400est">
    <nuxt-link :to="link" class="p-6 block">
      <fa :icon="['fal', icon]" class="text-gray-600 hover:text-gray-900"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["icon", "link", "hover"]
};
</script>

<style scoped>
</style>