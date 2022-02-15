<template>
  <div>
    <img :src="posterSrc" alt="" />
  </div>
</template>

<script>
export default {
  name: "Poster",
  props: ["finalUrl"],
  computed: {
    posterSrc() {
      console.log("ciao");
      return `https://image.tmdb.org/t/p/w342${this.finalUrl}`;
    },
  },
};
</script>

<style lamg="scss" scoped>
</style>