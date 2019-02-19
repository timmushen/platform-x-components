<template>
  <div class="leading-normal text-grey-darker text-sm max-w-md">
    <h3 :v-show="title" class="text-grey-darkest pb-1">{{title}}</h3>
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