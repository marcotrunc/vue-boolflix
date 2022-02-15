<template>
  <div class="container">
    <Cards :type="movies" typeTitle="Film" />
    <Cards :type="series" typeTitle="Serie Tv" />
  </div>
</template>

<script>
import axios from "axios";
import Cards from "./Cards.vue";
export default {
  name: "Main",
  props: ["search"],
  components: {
    Cards,
  },
  data() {
    return {
      movies: [],
      series: [],
      api: {
        baseUri: "https://api.themoviedb.org/3/",
        apiKey: "0716b96a2396251891c3d483c41f9ebc",
        language: "it-IT",
      },
    };
  },
  methods: {
    fetchProduct(baseUri, endPoint, config, product) {
      axios.get(baseUri + endPoint, config).then((res) => {
        console.log(res.data.results);
        this[product] = res.data.results;
      });
    },
    fetchFilms() {
      const { baseUri, apiKey, language } = this.api;
      const config = {
        params: {
          api_key: apiKey,
          query: this.search,
          language,
        },
      };

      this.fetchProduct(baseUri, "search/movie", config, "movies");
      this.fetchProduct(baseUri, "search/tv", config, "series");
    },
  },
  watch: {
    search: function () {
      if (!this.search) {
        this.movies = [];
        this.series = [];
      } else {
        this.fetchFilms();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>