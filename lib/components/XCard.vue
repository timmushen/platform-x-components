<template>
  <section class="bg-white flex-1 rounded border p-4 border-grey-light font-thin mb-4">
    <div :v-show="title != ''">
      <p class="text-xl leading-tight text-grey-darker" :v-show="title">{{title}}</p>
      <p class="text-sm leading-tight text-grey-dark" :v-show="subtitle">{{subtitle}}</p>
    </div>
    <div class="text-bg-grey-darkest">
      <slot></slot>
    </div>
  </section>
</template>
<style scoped>
</style>
<script>
export default {
  props: ["title", "subtitle"]
};
</script>