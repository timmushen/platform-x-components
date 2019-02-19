<template>
  <div>
    <div class="m-4">
      <div class="border-l-2 border-grey-light">
        <x-timeline-item/>
        <div class="pt-6 border-l-2 border-red-light -ml-px bg-grey-lightest">
          <div class="rounded-full bg-red-dark w-2 h-2 flex" style="margin-left: -5px;"></div>
          <div class="pl-4 flex flex-col -mt-5 pb-8 pt-2">
            <div class="font-bold mb-2 text-red-dark flex-1">Title</div>
            <div class="text-grey text-sm max-w-md flex-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XTimelineItem from "./XTimelineItem.vue";
export default {
  components: { XTimelineItem }
};
</script>

<style scoped>
</style>