<template>
  <div class="w-100">
    <img :src="posterSrc" alt="" class="img-fluid-100" />
  </div>
</template>

<script>
export default {
  name: "Poster",
  props: ["finalUrl"],
  computed: {
    posterSrc() {
      return `https://image.tmdb.org/t/p/w342${this.finalUrl}`;
    },
  },
};
</script>

<style lamg="scss" scoped>
img.img-fluid-100 {
  width: 100%;
  object-fit: cover;
}
</style>