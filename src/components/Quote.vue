<template>
  <section class="quote pt-5">
    <div class="container">
      <div class="quote-wrap">
        <div class="quote-avatar pb-5 p-md-0 mx-auto m-md-0">
          <img class="" src="../assets/user.jpg" alt="avatar"/>
        </div>
        <div class="quote-content px-5">
          <div>
            <p class="quote-text pb-5">„Používám běžný účet zcela zdarma, z bankomatu nevybírám, tak mi zcela stačí malý tarif. Super je ta stejná úroková sazba jako na spořícím účtě.“</p>
            <div class="quote-author">
              <icon name="slash" class="icon-slash mr-4"></icon>
              <div>
                <p class="quote-author-name">Eva Polanová</p>
                <p class="quote-author-position">administrativní pracovnice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/slash'

  export default {}
</script>

<style scoped lang="scss">
  .quote {
    &-wrap {
      display: flex;
      border: 1px solid $gray-86;
      @include media-breakpoint-down(sm) {
        flex-wrap: wrap;
        border: none;
      }
    }

    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-text {
      color: $black;
      font-weight: $font-weight-bold;
      font-size: rem(18px);
    }

    &-author {
      display: flex;
      align-items: center;
      font-weight: $font-weight-medium;

      &-name {
        color: $black;
        font-size: rem(18px);
        line-height: 1.2;
      }

      &-position {
        color: $primary;
        font-size: rem(15px);
      }
    }
  }
</style>
