<template>
  <section class="footer-links pb-4 pt-4">
    <div class="row">
      <div
              v-for="(col, cols) in [1,2,3,4]"
              :key="cols"
              class="col-lg-3 col-sm-6"
      >
        <Link
                class="footer-link"
                v-for="(link, index) in links[col-1]"
                :key="index"
                inverse
        >
          {{ link }}
        </Link>
      </div>
    </div>
  </section>
</template>

<script>
  import Link from '@/components/Link.vue'

  const links = [
    ['O Air Bank', 'Kontakt', 'Pro novináře', 'Pracujte u nás', 'Dokumenty'],
    ['Co vás nejvíc zajímá', 'Internetové bankovnictvi', 'Mobilní bankovnictví', 'Šanon', 'Pobočky a bankomaty'],
    ['Ceník ke stažení', 'Přehled úrokových sazeb', 'Přehled pojištění', 'Reklamační řád', 'Obchodní podmínky'],
    ['Novinky', 'Pokračovat v žádosti', 'Kurzovní lístek']
  ]

  export default {
    components: {
      Link
    },
    data () {
      return {
        links: links
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-links {
    border-bottom: 1px solid $gray-26;
  }

  .footer-link {
    width: 100%;
    font-size: rem(15px);
    line-height: 1.8;
    @include media-breakpoint-down(xs) {
      justify-content: center;
    }
  }
</style>
