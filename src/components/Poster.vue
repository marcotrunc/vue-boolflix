<template>
  <img :src="posterSrc" alt="" class="img-fluid-100" />
</template>

<script>
export default {
  name: "Poster",
  props: ["finalUrl"],
  computed: {
    posterSrc() {
      if (this.finalUrl)
        return `https://image.tmdb.org/t/p/w342${this.finalUrl}`;
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj56xaQokG9XLjbZY1tYpyNrWkrHXdkRfx2gZ9AVTgrMvH20aOJdLeMNtj6GhvRBnQKw&usqp=CAU";
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