<template>
  <section class="calc pt-5 pb-3">
    <div class="container">
      <h2 class="calc-title mb-5 text-center">Půjčková kalkulačka</h2>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="calc-item mb-5">
            <div class="row align-items-center">
              <div class="col-md-6">
                <label class="calc-item-label mb-3 mb-md-0 text-center text-md-left w-100">Kolik potřebujete půjčit?</label>
              </div>
              <div class="col-md-6">
                <div class="calc-item-val text-center text-md-right">
                  <p class="calc-item-field">
                    <span>{{loan.amount}} Kč</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="calc-item-slider">
              <vue-slider
                      ref="slider"
                      v-model="loan.amount"
                      v-bind="options.amount"
                      @callback="$emit('calc-change', loan)"
              >
              </vue-slider>
              <p class="d-flex justify-content-between">
                <span>{{options.amount.min}} Kč</span>
                <span>{{options.amount.max}} Kč</span>
              </p>
            </div>
          </div>
          <div class="calc-item mb-5">
            <div class="row align-items-center">
              <div class="col-md-6">
                <label class="calc-item-label mb-3 mb-md-0 text-center text-md-left w-100">Jak dlouho chcete splácet?</label>
              </div>
              <div class="col-md-6">
                <div class="calc-item-val text-center text-md-right">
                  <p class="calc-item-field">
                    <span>{{loan.duration}} měsíců</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="calc-item-slider">
              <vue-slider
                      ref="slider"
                      v-model="loan.duration"
                      v-bind="options.duration"
                      @callback="$emit('calc-change', loan)"
              >
              </vue-slider>
              <p class="d-flex justify-content-between">
                <span>{{options.duration.min}} měsíců</span>
                <span>{{options.duration.max}} měsíců</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vueSlider from 'vue-slider-component'

  const commonOptions = {
    height: 25,
    dotWidth: 35,
    dotHeight: 50,
    tooltip: 'hover',
    bgStyle: {
      'backgroundColor': '#99cc33',
          'border-radius': '4px'
    },
    sliderStyle: {
      'backgroundColor': '#111',
          'border-radius': '3px',
          'box-shadow': '0 0 0 6px #ededed'
    },
    tooltipStyle: {
      'backgroundColor': '#111',
          'borderColor': '#111'
    },
    processStyle: {
      'backgroundColor': '#99cc33',
          'border-radius': '4px'
    }
  }
  const options = {
    amount: {
      ...commonOptions,
      min: 5000,
      max: 900000,
      interval: 5000
    },
    duration: {
      ...commonOptions,
      min: 6,
      max: 96,
      interval: 3
    }
  }

  export default {
    props: {
      initLoan: {
        type: Object
      }
    },
    components: {
      vueSlider
    },
    data () {
      return {
        loan: {},
        options
      }
    },
    created () {
      this.loan = { ...this.initLoan }
    }
  }
</script>

<style scoped lang="scss">
  .calc {
    background-color: $gray-93;

    &-title {
      font-size: rem(34px);
      font-weight: $font-weight-bold;
      letter-spacing: -0.02em;
    }

    &-item {
      color: $black;
      font-size: rem(16px);

      &-label {
        font-weight: $font-weight-bold;
        margin-bottom: 0;
      }

      &-field {
        display: inline-block;
        text-align: center;
        background-color: white;
        font-weight: $font-weight-medium;
        padding: rem(10px) 0;
        min-width: rem(160px);
        border: 1px solid $gray-86;
        border-radius: 3px;
      }
    }
  }
</style>
