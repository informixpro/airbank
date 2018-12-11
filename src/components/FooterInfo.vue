<template>
  <section class="footer-info pb-2">
    <div class="row">
      <div class="col-sm-6 text-center text-sm-left">
        <h3 class="footer-info-title pb-4 pt-4">Nechte nám číslo, zavoláme vám zpět</h3>
        <div class="row">
          <div class="col-lg-6">
            <p class="footer-info-contact mt-1 mb-3">
              <icon name="phone" class="icon-phone"></icon>
              <span class="ml-4">515 202 202</span>
            </p>
          </div>
          <div class="col-lg-6">
            <Link
                    class="pt-2"
                    inverse
            >
              Zavoláme vám
            </Link>
          </div>
        </div>
      </div>
      <div class="col-sm-6 text-center text-sm-left">
        <h3 class="footer-info-title pb-4 pt-4">Máte už aplikaci Air Bank v kapesním vydání?</h3>
        <div class="d-flex flex-wrap justify-content-between">
          <a class="d-block mb-3 mx-auto mx-sm-0" href="#">
            <AppStore/>
          </a>
          <a class="d-block mb-3 mx-auto mx-sm-0" href="#">
            <GooglePlay/>
          </a>
          <a class="d-block mb-3 mx-auto mx-sm-0" href="#">
            <WindowsStore/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppStore from '@/assets/stores/app-store.svg'
  import GooglePlay from '@/assets/stores/google-play.svg'
  import WindowsStore from '@/assets/stores/windows-store.svg'
  import Link from '@/components/Link.vue'
  import '@/assets/icons/phone'

  export default {
    components: {
      AppStore,
      GooglePlay,
      WindowsStore,
      Link
    }
  }
</script>

<style scoped lang="scss">
  .footer-info {
    border-bottom: rem(1px) solid $gray-26;

    &-title {
      font-size: rem(20px);
      font-weight: $font-weight-bold;
    }

    &-contact {
      color: $primary;
      font-size: rem(20px);
      font-weight: $font-weight-bold;
    }
  }
</style>
