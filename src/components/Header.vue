<template>
  <header class="header" :class="menuOpen ? 'open' : ''" >
    <Carousel/>
    <TopNav/>
    <NavBar v-on:toggle="menuToggle"/>
    <NewsBar/>
  </header>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import NavBar from '@/components/NavBar.vue'
import NewsBar from '@/components/NewsBar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    TopNav,
    NavBar,
    NewsBar,
    Carousel
  },
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    menuToggle () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  height: rem(750px);
  overflow: hidden;
  @include media-breakpoint-down(sm) {
    height: rem(500px);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    max-height: 0;
    background-color: transparent;
    z-index: 1;
    transition: all .3s ease;
  }
}
.open {
  &:before {
    max-height: 1000px;
    background-color: rgba($black, .7);
    transition: all .3s ease;
  }
}
</style>
