<template>
  <section class="bg-white flex-1 rounded border p-4 border-gray-400 font-thin mb-4">
    <div :v-show="title != ''">
      <p class="text-xl leading-tight text-gray-700" :v-show="title">{{title}}</p>
      <p class="text-sm leading-tight text-gray-600" :v-show="subtitle">{{subtitle}}</p>
    </div>
    <div class="text-bg-gray-800">
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