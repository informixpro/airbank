<template>
  <section class="news d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <div class="row">
            <div v-for="(item, index) in items" class="col" :key="index">
              <p class="news-date">{{item.date}}</p>
              <a class="news-title" href="#">{{item.title}}</a>
              <p class="news-text">{{item.content}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <a class="news-link" href="#">
            <icon name="chevron" class="icon-chevron"></icon>
            novinky</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '@/assets/icons/chevron'

  const items = [
    {
      date: '1. 12. 2018',
      title: 'Lásky čas se blíží!',
      content: 'Poradíte zamilovaným, kde se 1. května políbit pod rozkvetlou třešní?'
    },
    {
      date: '1. 12. 2016',
      title: 'Nešlo vám zaplatit s nálepkou?',
      content: 'Vyzkoušejte těchto šest tipů!'
    },
    {
      date: '1. 12. 2016',
      title: 'Stavíme bankomaty',
      content: 'Stavíme na zkoušku pár nových bankomatů, časem budou i pípat'
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
  .news {
    margin-top: auto;
    margin-bottom: rem(25px);

    &-date {
      display: inline-block;
      font-size: rem(13px);
      font-weight: $font-weight-bold;
      letter-spacing: 0.2em;
      padding: rem(5px) rem(13px);
      border-radius: rem(2px);
      background-color: rgba($black, 0.35);
      color: $white;
      margin-bottom: rem(15px);
    }

    &-title {
      display: block;
      font-size: rem(20px);
      font-weight: $font-weight-bold;
      color: $white;

      &:hover {
        text-decoration: underline;
      }

      margin-bottom: rem(8px);
    }

    &-text {
      font-size: rem(16px);
      color: $white;
    }

    &-link {
      font-size: rem(16px);
      display: inline-block;
      transform: rotate(-90deg);
      transform-origin: bottom;
      white-space: nowrap;
      padding-top: rem(20px);
    }
  }
</style>
