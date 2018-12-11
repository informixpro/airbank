<template>
  <section class="top-nav pt-3 d-none d-lg-block">
    <div class="container">
      <div class="text-right">
        <button class="btn btn-header">
          Stát se klientem
        </button>
        <button class="btn btn-header ml-3">
          <icon name="lock" class="icon-lock mr-2"></icon>
          Internetové bankovnictví
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/lock'

  export default {}
</script>

<style scoped lang="scss">
  .top-nav {
    z-index: 0;
  }
</style>
