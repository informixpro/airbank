<template>
  <section class="carousel">
    <carousel
            :perPage="1"
            :autoplay="true"
            :autoplayTimeout="3000"
            :paginationEnabled="true"
            paginationColor="#99cc33"
            paginationActiveColor="#fff"
            :paginationSize="15"
            class="VueCarousel"
    >
      <slide>
        <div class="slider-item slider-item-one">
          <div class="container">
            <div class="slider-caption">
              <h2 class="slider-caption-title">Air Bank se mi líbí, protože si na nic nehraje</h2>
              <div class="slider-caption-subtitle mt-4">
                <div class="slider-caption-subtitle-icon mr-3">
                  <icon name="play" class="icon-play"></icon>
                </div>
                <div class="slider-caption-subtitle-text">
                  <h3 class="slider-caption-subtitle-name">Iva Šurkovská</h3>
                  <p class="slider-caption-subtitle-position">Usměvavá dispečerka a naše klientka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="slider-item slider-item-two">
          <div class="container">
            <div class="slider-caption">
              <h2 class="slider-caption-title">Air Bank se mi líbí, protože si na nic nehraje</h2>
              <div class="slider-caption-subtitle mt-4">
                <div class="slider-caption-subtitle-icon mr-3">
                  <icon name="play" class="icon-play"></icon>
                </div>
                <div class="slider-caption-subtitle-text">
                  <h3 class="slider-caption-subtitle-name">Iva Šurkovská</h3>
                  <p class="slider-caption-subtitle-position">Usměvavá dispečerka a naše klientka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </section>

</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import '@/assets/icons/play'

  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style scoped lang="scss">
  .carousel {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .slider {
    &-item {
      display: flex;
      align-items: center;
      background-size: cover;
      background-position: 60% center;
      background-repeat: no-repeat;
      width: 100%;
      height: rem(750px);
      @include media-breakpoint-down(sm) {
        height: rem(500px);
      }

      &-one {
        background-image: url("../assets/carousel/bg1.jpg");

      }

      &-two {
        background-image: url("../assets/carousel/bg3.jpg");
      }
    }

    &-caption {
      &-title {
        font-family: $font-family-hero;
        font-size: rem(44px);
        max-width: rem(400px);
        @include media-breakpoint-up(md) {
          font-size: rem(64px);
          max-width: rem(600px);
        }
        font-weight: $font-weight-thin;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: $white;
      }

      &-subtitle {
        display: flex;
        align-items: center;

        &-icon {
          border: rem(7px) solid rgba($white, 0.1);
          border-radius: 50%;
        }

        &-name {
          font-size: rem(18px);

          font-weight: $font-weight-medium;
          color: $white;
          line-height: 1.2;
        }

        &-position {
          font-size: rem(15px);

          font-weight: $font-weight-medium;
          color: $primary;
        }
      }
    }
  }

</style>

<style lang="scss">
  .VueCarousel {
    .VueCarousel-pagination {
      position: absolute;
      bottom: rem(180px);
      @include media-breakpoint-down(md) {
        bottom: rem(10px);
      }
    }
  }
</style>
