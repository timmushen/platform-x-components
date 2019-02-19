<template>
  <div class="hover:bg-grey-lightest">
    <nuxt-link :to="link" class="p-6 block">
      <fa :icon="['fal', icon]" class="text-grey-dark hover:text-black"/>
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