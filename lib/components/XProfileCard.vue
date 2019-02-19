<template>
  <div class="w-64 rounded border border-grey-light bg-white mb-4 justify-start">
    <div class="bg-blue-dark h-24 rounded-tr rounded-tl"></div>
    <img
      class="w-16 h-16 rounded-full mr-4 ml-4 -mt-8 border-4 border-white"
      src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
    >
    <div class="bg-white h-32 rounded-br rounded-bl">
      <div class="ml-24 -mt-8 pt-2">
        <div class="font-black font-bold">Cait Genevieve</div>
        <x-icon-widget icon="unicorn" class="text-grey-darker text-xs">Part Unicorn</x-icon-widget>
      </div>
      <x-hr class="mx-2 opacity-50"/>
    </div>
    <div
      class="bg-grey-lightest p-4 text-center text-sm text-grey-dark hover:text-grey-darkest"
    >Connect</div>
  </div>
</template>

<script>
import XHr from "@/components/XHr.vue";
import XIconWidget from "@/components/XIconWidget.vue";
export default {
  components: {
    XHr,
    XIconWidget
  }
};
</script>

<style scoped>
</style>