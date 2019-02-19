<template>
  <span>
    <fa :icon="['fal', icon]" class="mr-1 opacity-75"/>
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  props: ["icon"]
};
</script>

<style scoped>
</style>