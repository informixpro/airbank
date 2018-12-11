<template>
  <section class="additions">
    <div class="container">
      <h2 class="additions-header pt-5 pb-4">K běžnému účtu se hodí</h2>
      <div class="row">
        <div v-for="(item, index) in items" class="col-md my-3 my-md-5" :key="index">
          <div class="additions-item">
            <icon :name="item.icon" :class="'icon-' + item.icon"></icon>
            <h3 class="additions-title py-3 py-md-4">{{item.title}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/iphone'
  import '@/assets/icons/folders'
  import '@/assets/icons/comp'

  const items = [
    {
      icon: 'comp',
      title: 'Internetové bankovnictví',
      text: 'Naše internetové bankovnictví se snadno ovládá a je přehledné.'
    },
    {
      icon: 'folders',
      title: 'Šanon',
      text: 'Jednodušší platby faktur i život s účtenkami'
    },
    {
      icon: 'iphone',
      title: 'Mobilní bankovnictví',
      text: 'Jakmile si aplikaci stáhnete, budete mít naši banku stále na dosah ruky.'
    }
  ]

  export default {
    data () {
      return {
        items: items
      }
    }
  }
</script>

<style scoped lang="scss">
  .additions {
    &-header {
      font-size: rem(24px);
      font-weight: $font-weight-bold;
      text-align: center;
      border-top: 1px solid $gray-86;
    }

    &-item {
      height: 100%;
      border: 1px solid $primary;
      border-radius: rem(4px);
      color: $black;
      text-align: center;
      padding: rem(30px) rem(35px);
    }

    &-title {
      font-size: rem(18px);
      font-weight: $font-weight-bold;
    }
  }
</style>
