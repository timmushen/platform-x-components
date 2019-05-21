<template>
  <header
    class="bg-white flex border-b border-gray-400 text-grey justify-between sticky top-0 ml-16"
  >
    <div class="font-gray-900 text-gray-900 p-4">{{title}}</div>

    <div class="flex flex-row">
      <div class="p-4 relative">
        <nuxt-link to="/" class="block">
          <fa :icon="['fal','bell']" class="text-gray-600 hover:text-gray-900"></fa>
        </nuxt-link>
        <x-notification-circle>2</x-notification-circle>
      </div>
      <x-header-button/>
    </div>
  </header>
</template>

<script>
import XButton from "./XButton.vue";
import XHeaderButton from "./XHeaderButton.vue";
import XNotificationCircle from "./XNotificationCircle.vue";
export default {
  props: ["title"],
  components: {
    XButton,
    XHeaderButton,
    XNotificationCircle
  }
};
</script>

<style scoped>
</style>