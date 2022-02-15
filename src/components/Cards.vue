<template>
  <section>
    <h2>{{ typeTitle }}</h2>
    <Card v-for="item in type" :key="item.id || index" :product="item" />
  </section>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Cards",
  props: ["type", "typeTitle"],
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
</style>