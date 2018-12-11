<template>
  <a
          :href="href"
          class="link"
          :class="inverse ? 'inverse' : ''"
  >
    <icon v-if="icon" name="chevron" class="icon-chevron mr-1"></icon>
    <slot/>
  </a>
</template>

<script>
  import '@/assets/icons/chevron'

  export default {
    inheritAttrs: false,
    props: {
      href: {
        type: String,
        default: ''
      },
      icon: {
        type: Boolean,
        default: true
      },
      inverse: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .link {
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    color: $black;

    &:hover {
      color: $primary;
    }
  }

  .inverse {
    color: $white;
  }
</style>
