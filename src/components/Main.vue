<template>
  <div class="container">
    <h2>Film</h2>
    <ul v-for="film in films" :key="film.id || index">
      <h3>{{ film.title }}</h3>
      <li>{{ film.original_title }}</li>
      <li>
        <Flag :language="film.original_language" />
      </li>
      <li>{{ film.vote_average }}</li>
    </ul>

    <h2>Serie Tv</h2>
    <ul v-for="serie in series" :key="serie.id || index">
      <h3>{{ serie.name }}</h3>
      <li>{{ serie.original_name }}</li>
      <Flag :language="serie.original_language" />
      <li>{{ series.vote_average }}</li>
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
      series: [],
      //   data Api
      baseUri: "https://api.themoviedb.org/3/",
      apiKey: "0716b96a2396251891c3d483c41f9ebc",
      language: "it-IT",
      endPoints: ["search/movie", "search/tv"],
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
      this.endPoints.forEach((endPoint) => {
        axios.get(this.baseUri + endPoint, config).then((res) => {
          if (endPoint === "search/movie") this.films = res.data.results;
          else this.series = res.data.results;
        });
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