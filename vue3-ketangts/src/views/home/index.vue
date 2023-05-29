<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper />
    <HomeList />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import HomeHeader from './home-header.vue'
import HomeSwiper from './home-swiper.vue'
import HomeList from './home-list.vue'

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList
  },
  setup() {
    
  }
})
</script>