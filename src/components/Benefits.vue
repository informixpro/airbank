<template>
  <section class="benefits pt-4">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in items" class="col-md" :key="index">
          <p class="benefits-title">{{item.title}}</p>
          <p class="benefits-text pb-4">{{item.text}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  const items = [
    {
      title: 'Máme půjčku bez poplatku',
      text: 'Jako 1. banka'
    },
    {
      title: 'Spoření se vám vyplatí, a to díky',
      text: 'TOP 3 garanci'
    },
    {
      title: 'Bankomaty budou dostupnější. Stavíme',
      text: ' až 300 nových'
    }
  ]

  export default {
    name: 'Benefits',
    data () {
      return {
        items: items
      }
    }
  }
</script>

<style scoped lang="scss">
  .benefits {
    background-color: $primary;
    text-align: center;

    &-title {
      font-weight: $font-weight-medium;
      color: $black;
      letter-spacing: -0.04em;
      font-size: rem(12px);
      @include media-breakpoint-up(lg) {
        font-size: rem(16px);
      }
    }

    &-text {
      font-weight: $font-weight-extra-bold;
      color: $white;
      font-size: rem(28px);
      @include media-breakpoint-up(lg) {
        font-size: rem(38px);
      }
    }
  }
</style>
