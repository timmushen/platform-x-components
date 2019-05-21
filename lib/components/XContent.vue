<template>
  <div class="leading-normal text-gray-700 text-sm max-w-md">
    <h3 :v-show="title" class="text-gray-800 pb-1">{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
</style>