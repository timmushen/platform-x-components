<template>
  <div
    class="mt-12 mb-12 bg-purple-dark max-w-md p-4 text-sm border-red shadow-md hover:shadow-lg flex rounded"
  >
    <div class="flex w-20 pl-5 pr-4 pt-3 text-center" :v-if="icon != ''">
      <fa :icon="['fal', icon]" class="text-purple-lightest round-full fa-2x"/>
    </div>
    <div class="flex-1 ml-6">
      <div class="text-purple-lightest text-lg font-bold pb-2 pt-2">{{title}}</div>
      <div class="text-purple-lighter leading-normal">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon"]
};
</script>

<style scoped>
</style>