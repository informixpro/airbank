<template>
  <section class="faq pt-5 pb-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="faq-title pb-4">Nejčastější otázky</h2>
          <div v-for="(item, index) in items" class="faq-item py-3" :key="index">
            <icon name="question" class="icon-question flex-shrink-0"></icon>
            <div class="pl-4">
              <h3 class="faq-item-title mt-1 mb-3">{{item.title}}</h3>
              <p>{{item.text}}
                <Link :icon="false">číst více</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center py-4">
        <Link>Všechny otázky k účtu</Link>
      </p>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/question'
  import Link from '@/components/Link.vue'

  const items = [
    {
      title: 'Jaký je rozdíl mezi spořicím a běžným účtem?',
      text: 'Běžný účet slouží hlavně pro posílání a přijímání peněz, můžete k němu mít vydanou platební kartu, nastavovat zde trvalé příkazy a inkasa. Na spořicím účtu si můžete spořit až do deseti různých obálek, které si sami pojmenujete.'
    },
    {
      title: 'Jakou kartu dostanu ke svému účtu?',
      text: 'K běžnému účtu vydáváme embosované karty MasterCard kontaktní a bezkontaktní. Nový klient má možnost vybrat si bezkontaktní kartu během žádosti při zakládání účtu.'
    },
    {
      title: 'Jak získat na běžném i spořicím účtu bonusový úrok?',
      text: 'Je to jednoduché, stačí vám jenom tři věci. Náš běžný účet, k němu platební karta a pak už jen tou kartou 5× do měsíce zaplatit.'
    }
  ]

  export default {
    components: {
      Link
    },
    data () {
      return {
        items: items
      }
    }
  }
</script>

<style scoped lang="scss">
  .faq {
    &-title {
      font-size: rem(34px);
      font-weight: $font-weight-bold;
      text-align: center;
    }

    &-item {
      display: flex;
      align-items: flex-start;
      color: $black;

      &:not(:last-child) {
        border-bottom: 1px solid $gray-86;
      }

      &-title {
        font-size: rem(16px);
        line-height: 1.5;
        font-weight: $font-weight-bold;
      }
    }
  }
</style>
