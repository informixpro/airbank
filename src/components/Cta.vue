<template>
  <section class="cta">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in items" :key="index">
          <div class="cta-item pb-5 text-center mx-auto">
            <icon :name="item.icon" :class="'icon-' + item.icon"></icon>
            <h3 class="cta-item-title my-4">{{item.title}}</h3>
            <a class="btn btn-tab" href="#">{{item.button}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/online'
  import '@/assets/icons/helpdesk'
  import '@/assets/icons/branch'

  const items = [
    {
      icon: 'online',
      title: 'Chci si o půjčku zažádat online',
      button: 'Chci půjčku'
    },
    {
      icon: 'helpdesk',
      title: 'Zavolejte nám nebo my vám',
      button: '800 30 30 30'
    },
    {
      icon: 'branch',
      title: 'Rádi vás uvidíme na naší pobočce',
      button: 'Nejbližší pobočka'
    }
  ]

  export default {
    data () {
      return {
        items
      }
    }
  }
</script>

<style scoped lang="scss">
  .cta {
    padding-top: rem(85px);

    &-item {
      color: $black;

      &-title {
        font-size: rem(20px);
        font-weight: $font-weight-bold;
      }
    }
  }
</style>
