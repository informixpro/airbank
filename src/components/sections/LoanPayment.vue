<template>
  <section class="py-12">
    <div class="container  max-w-3xl">
      <table class="table-fixed w-full text-left text-base font-normal border-collapse">
        <thead>
        <tr>
          <th class="border-y-b border-gray-86 py-4"></th>
          <th class="font-bold text-lg text-primary border-y-b border-gray-86 py-4">Běžně</th>
          <th class="font-bold text-lg text-primary border-y-b border-gray-86 py-4">Když splácíte včas</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="font-normal border-y border-gray-86 py-4">Splátka</th>
          <td class="font-bold border-y border-gray-86 py-4">{{ payment }} Kč</td>
          <td class="border-y border-gray-86 py-4">1 521 Kč</td>
        </tr>
        <tr>
          <th class="font-normal border-y border-gray-86 py-4">Počet splátek</th>
          <td class="font-bold border-y border-gray-86 py-4">{{ duration }}</td>
          <td class="border-y border-gray-86 py-4">63<p><em>Odpustíme vám 9 splátek</em></p></td>
        </tr>
        <tr>
          <th class="font-normal border-y border-gray-86 py-4">Celkem zaplatíte</th>
          <td class="border-y border-gray-86 py-4">109 481 Kč</td>
          <td class="border-y border-gray-86 py-4">95 641 Kč<p>ušetříte 13 840 Kč</p></td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
	const amount = useState('amount')
	const duration = useState('duration')

	const payment = computed<number>(() => (amount.value / duration.value).toFixed())
</script>
