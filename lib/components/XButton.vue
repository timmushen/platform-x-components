<template>
  <span>
    <button class="bg-blue hover:bg-blue-dark hover:shadow-md text-white py-2 px-4 rounded">
      <fa :icon="['fal', icon]" class="mr-1 -ml-1"/>
      <slot></slot>
    </button>
  </span>
</template>

<script>
export default {
  props: ["icon"]
};
</script>

<style scoped>
</style>