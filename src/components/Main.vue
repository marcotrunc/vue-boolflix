<template>
  <div class="container">
    <ul v-for="film in films" :key="film.id || index">
      <h3>{{ film.title }}</h3>
      <li>{{ film.original_title }}</li>
      <li>
        <Flag :language="film.original_language" />
      </li>
      <li>{{ film.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Flag from "./Flag.vue";
export default {
  name: "Main",
  props: ["search"],
  components: {
    Flag,
  },
  data() {
    return {
      films: [],
      //   data Api
      apiKey: "0716b96a2396251891c3d483c41f9ebc",
      language: "it-IT",
    };
  },
  methods: {
    fetchFilms() {
      const config = {
        params: {
          api_key: this.apiKey,
          query: this.search,
          language: this.language,
        },
      };

      axios
        .get("https://api.themoviedb.org/3/search/movie", config)
        .then((res) => {
          this.films = res.data.results;
        });
    },
  },
  computed: {
    searchFilms() {
      if (!this.search) return;
      else return this.fetchFilms();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>