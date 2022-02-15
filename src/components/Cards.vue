<template>
  <section>
    <h2 class="text-white text-uppercase">{{ typeTitle }}</h2>
    <div class="row gx-1">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="item in type"
        :key="item.id || index"
      >
        <Card :product="item" class="p-3" />
      </div>
    </div>
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