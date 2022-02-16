<template>
  <section class="container-fluid">
    <div class="bg-dark" v-if="movies.length > 0 || series.length > 0">
      <Cards :items="movies" typeTitle="Film" />
      <Cards :items="series" typeTitle="Serie Tv" />
    </div>
    <div id="message-container" v-else>
      <h2>Ricerca un nuovo titolo</h2>
    </div>
  </section>
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
#message-container h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: #000;
}
</style>