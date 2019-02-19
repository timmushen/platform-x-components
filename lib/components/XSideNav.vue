<template>
  <div class="relative">
    <nav class="flex flex-col bg-white h-screen w-16 border-r border-grey-light fixed">
      <x-nav-brand/>
      <x-nav-item icon="alicorn" link="/"/>
      <x-nav-item icon="angel" link="/"/>
      <x-nav-item icon="asterisk" link="/"/>
      <x-nav-item icon="bars" link="/"/>
      <x-nav-item icon="baby" link="/"/>
      <div class="pin-b absolute">
        <x-nav-item icon="life-ring" link="/"/>
        <x-nav-item icon="cog" link="/"/>
        <div>
          <nuxt-link to="/" class="p-1 block">
            <x-avatar
              src="http://www.cremetangerine.com/wp-content/uploads/2018/09/member-tim.jpg"
            />
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import XNavBrand from "./XNavBrand.vue";
import XNavItem from "./XNavItem.vue";
import XAvatar from "./XAvatar.vue";
export default {
  components: { XNavBrand, XNavItem, XAvatar }
};
</script>