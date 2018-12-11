<template>
  <main>
    <Branch/>
    <Benefits/>
  </main>
</template>

<script>
  import Benefits from '@/components/Benefits.vue'
  import Branch from '@/components/Branch.vue'

  export default {
    components: {
      Benefits,
      Branch
    }
  }
</script>
