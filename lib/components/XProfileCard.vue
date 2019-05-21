<template>
  <div class="w-64 rounded border border-gray-400 bg-white mb-4 justify-start">
    <div class="bg-blue--600 h-24 rounded-tr rounded-tl"></div>
    <img
      class="w-16 h-16 rounded-full mr-4 ml-4 -mt-8 border-4 border-white"
      src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
    >
    <div class="bg-white h-32 rounded-br rounded-bl">
      <div class="ml-24 -mt-8 pt-2">
        <div class="font-gray-900 font-bold">Cait Genevieve</div>
        <x-icon-widget icon="unicorn" class="text-gray-700 text-xs">Part Unicorn</x-icon-widget>
      </div>
      <x-hr class="mx-2 opacity-50"/>
    </div>
    <div class="bg-gray-400est p-4 text-center text-sm text-gray-600 hover:text-gray-800">Connect</div>
  </div>
</template>

<script>
import XHr from "./XHr.vue";
import XIconWidget from "./XIconWidget.vue";
export default {
  components: {
    XHr,
    XIconWidget
  }
};
</script>

<style scoped>
</style>