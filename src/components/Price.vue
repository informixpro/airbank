<template>
  <section class="price pt-5 pb-3">
    <div class="container">
      <table class="table price-table">
        <thead>
        <tr>
          <th></th>
          <th>Běžně</th>
          <th>Když splácíte včas</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>Splátka</th>
          <td><strong><span>{{(loan.amount / loan.duration).toFixed(0)}}</span> Kč</strong></td>
          <td><strong>1 521 Kč</strong></td>
        </tr>
        <tr>
          <th>Počet splátek</th>
          <td><strong>{{loan.duration}}</strong></td>
          <td><strong>63</strong><p><em>Odpustíme vám 9 splátek</em></p></td>
        </tr>
        <tr>
          <th>Celkem zaplatíte</th>
          <td><strong>109 481 Kč</strong></td>
          <td><strong>95 641 Kč</strong><p>ušetříte 13 840 Kč</p></td>
        </tr>
        <tr>
          <th>Úroková sazba</th>
          <td><strong>10,9 %</strong></td>
          <td><strong>6,9 %</strong></td>
        </tr>
        <tr>
          <th>RPSN</th>
          <td>11,47 %</td>
          <td>7,13 %</td>
        </tr>
        <tr>
          <th>Poplatky za vedení</th>
          <td>0 Kč</td>
          <td>0 Kč</td>
        </tr>
        </tbody>
      </table>
      <p class="price-comment">
        <strong>Sazbu 6,9 - 9,9 % u nás zaručeně dostanete</strong>, pokud budete splácet včas. Poslední splátky vám pak totiž automaticky odpustíme.
        Výpočet je pouze orientační. Přesný výpočet půjčky získáte během online žádosti.
        <Link :icon="false">Přečtěte si obchodní podmínky k půjčce.</Link>
      </p>
    </div>
  </section>
</template>

<script>

  import Link from '@/components/Link.vue'

  export default {
    props: {
      loan: {
        type: Object
      }
    },
    components: {
      Link
    }
  }
</script>

<style scoped lang="scss">
  .price {
    &-comment {
      font-size: rem(15px);
      text-align: center;
    }

    &-link {
      color: $black;
      text-decoration: underline;
    }

    &-table {
      font-size: rem(15px);
      table-layout: fixed;
      margin-bottom: rem(20px);
      width: 100%;
      max-width: 100%;

      em {
        color: $primary;
        font-style: normal;
        font-weight: $font-weight-bold;
      }
    }

    .table > thead > tr > th,
    .table > tbody > tr > td {
      text-align: center;
    }

    .table th {
      font-weight: $font-weight-normal;
    }

    .table > thead > tr > th {
      font-size: rem(20px);
      padding-top: rem(20px);
      padding-bottom: rem(20px);
      font-weight: $font-weight-extra-bold;
      color: $primary;
      border: 0;

      &:nth-child(2), &:nth-child(3) {
        width: 30%;
      }
    }

    .table > tbody > tr > th,
    .table > tbody > tr > td {
      padding-top: rem(16px);
      padding-bottom: rem(16px);
      border-top: 0;
      border-bottom: 1px solid $gray-86;
    }
  }
</style>
