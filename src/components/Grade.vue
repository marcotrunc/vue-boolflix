<template>
  <div>
    <i v-for="n in numFas" :key="'A' + n" class="fas fa-star"></i>
    <i v-for="a in numFar" :key="'B' + a" class="far fa-star"></i>
  </div>
</template>

<script>
export default {
  name: "Grade",
  props: ["vote"],
  data() {
    return {
      max: 5,
    };
  },
  computed: {
    numFas() {
      return Math.ceil(this.vote / 2);
    },
    numFar() {
      return this.max - this.numFas;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>