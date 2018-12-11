<template>
  <main>
    <Advantages/>
    <Calc :initLoan="loan" v-on:calc-change="calcUpdate"/>
    <Price :loan="loan"/>
    <Cta/>
    <Quote/>
    <Faq/>
    <Additions/>
  </main>
</template>

<script>
  import Additions from '@/components/Additions.vue'
  import Faq from '@/components/Faq.vue'
  import Quote from '@/components/Quote.vue'
  import Cta from '@/components/Cta.vue'
  import Price from '@/components/Price.vue'
  import Advantages from '@/components/Advantages.vue'
  import Calc from '@/components/Calc.vue'

  export default {
    components: {
      Faq,
      Additions,
      Quote,
      Cta,
      Price,
      Advantages,
      Calc
    },
    data () {
      return {
        loan: {
          amount: 320000,
          duration: 72
        }
      }
    },
    methods: {
      calcUpdate (loan) {
        this.loan = { ...loan }
      }
    }
  }
</script>
