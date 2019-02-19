<template>
  <div>
    <div
      class="mt-12 mb-12 max-w-md border-t-8 border-b-2 p-4 text-sm border-red shadow-md hover:shadow-lg flex rounded bg-white"
      v-if="type == 'warning'"
    >
      <div class="flex w-20 pl-5 pr-4 pt-3 text-center">
        <fa :icon="['fal', 'exclamation-triangle']" class="text-red round-full fa-2x"/>
      </div>
      <div class="flex-1 ml-6">
        <div class="text-red-dark text-lg font-bold pb-2 pt-2">{{title}}</div>
        <div class="text-grey-darker leading-normal">
          <slot></slot>
        </div>
      </div>
    </div>
    <div
      class="mt-12 mb-12 max-w-md border-t-8 border-b-2 p-4 text-sm border-green shadow-md hover:shadow-lg flex rounded bg-white"
      v-else
    >
      <div class="flex w-20 pl-5 pr-4 pt-3 text-center">
        <fa :icon="['fal', 'check']" class="text-green round-full fa-2x"/>
      </div>
      <div class="flex-1 ml-6">
        <div class="text-green-dark text-lg font-bold pb-2 pt-2">{{title}}</div>
        <div class="text-grey-darker leading-normal">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "type"]
};
</script>

<style scoped>
</style>