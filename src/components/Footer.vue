<template>
  <footer class="footer">
    <div class="container">
      <FooterLinks/>
      <FooterInfo/>
      <FooterCopy/>
    </div>
  </footer>
</template>

<script>
  import FooterLinks from '@/components/FooterLinks.vue'
  import FooterInfo from '@/components/FooterInfo.vue'
  import FooterCopy from '@/components/FooterCopy.vue'

  export default {
    components: {
      FooterLinks,
      FooterInfo,
      FooterCopy
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: $gray-16;
    padding: 0;
    color: $white;
  }
</style>
