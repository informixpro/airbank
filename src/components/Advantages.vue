<template>
  <section class="advantages py-5 text-center">
    <div class="container">
      <div class="advantages-tabs">
        <a @click="activateTab(1)" :class="isTabActive(1)" class="btn btn-tab">Nová půjčka</a>
        <a @click="activateTab(2)" :class="isTabActive(2)" class="btn btn-tab">Převedení půjčky</a>
      </div>
      <div class="tab-content">
        <div v-if="activeTabIndex === 1" class="tabcontent">
          <div class="row">
            <div v-for="(item, index) in items" :key="index" class="col-sm-4">
              <div class="advantages-item pb-4 text-center">
                <h3 class="advantages-item-title mb-4 mx-auto">{{item.title}}</h3>
                <p class="mb-4" v-html="item.text"></p>
                <Link>Více informací</Link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTabIndex === 2" class="tabcontent">
          <div class="row">
            <div v-for="(item, index) in items" :key="index" class="col-sm-4">
              <div class="advantages-item pb-4">
                <h3 class="advantages-item-title mb-4 mx-auto">Lorem ipsum dolor sit amet.</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque earum eius et,
                  <strong>magni qui sint voluptatum!.</strong></p>
                <Link>Více informací</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Link from '@/components/Link.vue'

  const items = [
    {
      title: 'Odměníme vás za včasné splácení',
      text: 'Když budete splácet včas, odpustíme vám poslední splátky. Ušetřit můžete i <strong>desítky tisíc korun.</strong>'
    },
    {
      title: 'Mimořádná splátka kdykoliv a zdarma',
      text: 'U nás nemáme<strong> žádné poplatky </strong>za sjednání a vedení půjčky ani za mimořádnou splátku nebo předčasné splacení '
    },
    {
      title: 'Peníze do hodiny? Na pobočce klidně',
      text: 'Když budete mít potřebné doklady a všechno klapne, můžete mít<strong> peníze už za hodinu.</strong>'
    }
  ]

  export default {
    components: {
      Link
    },
    data () {
      return {
        items,
        activeTabIndex: 1
      }
    },
    methods: {
      activateTab (index) {
        this.activeTabIndex = index
      },
      isTabActive (index) {
        return this.activeTabIndex === index ? 'active' : ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .advantages {
    &-tabs {
      margin-bottom: rem(75px);

      .btn-tab {
        width: 100%;
        border-radius: 0;
      }

      @include media-breakpoint-up(sm) {
        .btn-tab {
          width: auto;
        }
        .btn-tab:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .btn-tab:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }

    &-item {
      color: $black;

      &-title {
        font-size: rem(24px);
        font-weight: $font-weight-bold;
        letter-spacing: -0.02em;
        max-width: rem(230px);
      }
    }
  }
</style>
