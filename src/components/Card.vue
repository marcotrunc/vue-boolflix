<template>
  <section>
    <div class="card">
      <Poster :finalUrl="product.poster_path" class="card-img-top h-100" />
      <div class="description py-4">
        <h3 class="fs-4">{{ product.title || product.name }}</h3>
        <div>{{ product.original_title || product.original_name }}</div>
        <div class="flag-container">
          <Flag :language="product.original_language" />
        </div>
        <Grade :vote="product.vote_average" />
        <Cast :id="product.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Flag from "./Flag.vue";
import Poster from "./Poster.vue";
import Grade from "./Grade.vue";
import Cast from "./Cast.vue";
export default {
  name: "Card",
  props: ["product", "title", "original_title"],
  components: {
    Flag,
    Poster,
    Grade,
    Cast,
  },
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  height: 500px;
  .description {
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    color: #fff;

    .flag-container {
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
  }
}

.card:hover .description {
  animation-name: example;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
</style>