<template>
  <section class="branch">
    <div class="row no-gutters">
      <div class="col-md-6">
        <div class="container container-half">
          <div class="branch-info">
            <h2 class="branch-header">Nejbližší pobočka</h2>
            <h3 class="branch-title mt-5 mb-3">Praha, OC Palladium</h3>
            <p class="branch-address mb-3">nám. Republiky 1 <br>110 00 Praha 1</p>
            <p class="d-flex align-items-center">
              <icon name="location" class="icon-location mr-1"></icon>
              <Link :icon="false">Myslíte, že jsme vám blíže?</Link>
            </p>
            <h3 class="branch-title mt-5 mb-3">Pobočka má otevřeno ještě <span class="branch-title-em">52 minut</span>
            </h3>
            <ul class="mt-4">
              <li class="branch-open mb-3">
                <span class="branch-open-days">Po - So</span>
                <span class="ml-3">9:00 - 21:00</span>
              </li>
              <li class="branch-open mb-3">
                <span class="branch-open-days">Neděle</span>
                <span class="ml-3">10:00 - 21:00</span>
              </li>
            </ul>
            <ul class="branch-features my-4">
              <li v-for="(item, index) in items" class="text-center mb-3 mx-3" :key="index">
                <p class="branch-features-icon">
                  <icon :name="item.icon" :class="'icon-' + item.icon"></icon>
                </p>
                <h4 class="branch-features-text mt-3">{{item.text}}</h4>
              </li>
            </ul>
            <p class="branch-call-text mb-3">Opravdu musíte na pobočku? Zavolejte nám</p>
            <p class="branch-call-number mb-3">515 202 202</p>
            <p>
              <Link>Zpět na výpis poboček?</Link>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6" style="background-color: ivory">
        <div class="h-100">
          <div class="branch-map">
            <googlemaps-map
                    :center.sync="center"
                    :zoom.sync="zoom"
                    style="width: 100%; height: 100%"
            >
              <googlemaps-marker
                      v-for="(m, key) in markers"
                      :position="m.position"
                      :key="key"
                      :clickable="true"
                      :draggable="true"
                      :icon="{ url: require('../assets/marker.png')}"
                      @click="center=m.position">
              </googlemaps-marker>
            </googlemaps-map>
          </div>
          <div class="branch-office">
            <img class="branch-office-item" src="../assets/office/1.jpg" alt="branch">
            <img class="branch-office-item" src="../assets/office/2.jpg" alt="branch">
            <img class="branch-office-item" src="../assets/office/1.jpg" alt="branch">
            <img class="branch-office-item" src="../assets/office/2.jpg" alt="branch">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/location'
  import '@/assets/icons/bancomat'
  import '@/assets/icons/baby'
  import '@/assets/icons/cafe'
  import '@/assets/icons/hamburger'
  import '@/assets/icons/access'
  import Link from '@/components/Link.vue'

  const items = [
    {
      icon: 'bancomat',
      text: 'Bankomat'
    },
    {
      icon: 'baby',
      text: 'Dítě'
    },
    {
      icon: 'cafe',
      text: 'Káva'
    },
    {
      icon: 'hamburger',
      text: 'Jídlo'
    },
    {
      icon: 'access',
      text: 'Bezbariérový'
    }
  ]

  export default {
    components: {
      Link
    },
    data () {
      return {
        items,
        center: {
          lat: 50.089186,
          lng: 14.428722
        },
        zoom: 7,
        markers: [{
          position: {
            lat: 50.089186,
            lng: 14.428722
          }
        }]
      }
    }
  }
</script>

<style scoped lang="scss">

  .container-half {
    @include media-breakpoint-up(md) {
      margin-right: 0;
      @include make-container-half-widths();
    }
  }

  .branch {

    &-office {
      display: flex;
      width: 100%;
      overflow: hidden;
      height: rem(200px);

      &-item {
        @include img-fluid();
      }
    }

    &-info {
      padding: rem(80px) 0 rem(60px);
    }

    &-header {
      font-size: rem(34px);
      font-weight: $font-weight-bold;
      letter-spacing: -.02em;
    }

    &-title {
      font-size: rem(20px);
      font-weight: $font-weight-bold;
      letter-spacing: -.02em;

      &-em {
        color: $primary;
      }
    }

    &-address {
      font-size: rem(16px);
    }

    &-open {
      display: flex;
      align-items: center;

      &-days {
        font-weight: $font-weight-bold;
        padding: rem(3px) rem(18px);
        border: rem(2px) solid $gray-86;
        border-radius: 2px;
      }
    }

    &-features {
      display: flex;
      flex-wrap: wrap;

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        @include size(rem(50px));
        border-radius: 50%;
        margin: auto;
        border: rem(2px) solid $gray-86;
      }

      &-text {
        font-size: rem(13px);
      }
    }

    &-call {
      &-text {
        font-size: rem(16px);
      }

      &-number {
        font-size: rem(24px);
        font-weight: $font-weight-bold;
        color: $primary;
      }
    }

    &-map {
      height: rem(200px);
      width: 100%;
      position: relative;
      @include media-breakpoint-up(md) {
        height: calc(100% - 200px);
      }
    }
  }
</style>
