<template>
  <ul>
    <h3>{{ product.title || product.name }}</h3>
    <li>{{ product.original_title || product.original_name }}</li>
    <li><Poster :finalUrl="product.poster_path" /></li>
    <li>
      <Flag :language="product.original_language" />
    </li>
    <li>
      <Grade :vote="product.vote_average" />
    </li>
  </ul>
</template>

<script>
import Flag from "./Flag.vue";
import Poster from "./Poster.vue";
import Grade from "./Grade.vue";
export default {
  name: "Card",
  props: ["product", "title", "original_title"],
  components: {
    Flag,
    Poster,
    Grade,
  },
};
</script>

<style style="scss" scoped>
</style>