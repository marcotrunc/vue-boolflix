<template>
  <div>
    <button @click="fetchCast()">{{ messageCast }}</button>
    <ul v-show="flag" class="list-cast">
      <li v-for="(actor, index) in actors" :key="index">
        <a href="#">{{ actor }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cast",
  props: ["id"],
  data() {
    return {
      actors: [],
      flag: false,
      api: {
        baseUri: "https://api.themoviedb.org/3/",
        apiKey: "0716b96a2396251891c3d483c41f9ebc",
      },
    };
  },
  methods: {
    fetchCast() {
      const { baseUri, apiKey } = this.api;
      axios
        .get(
          `${baseUri}movie/${this.id}/credits?api_key=${apiKey}&language=en-US`
        )
        .then((res) => {
          this.pushProperty(res.data.cast, 5, "actors", "name");
          this.isVisible("flag");
        });
    },
    pushProperty(result, n, arr, property) {
      if (this[arr].length > 0) return;
      const arrCast = result;
      for (let i = 0; i < n; i++) {
        this[arr].push(arrCast[i][property]);
      }
    },
    isVisible(visible) {
      if (!this[visible]) this[visible] = true;
      else this[visible] = false;
    },
  },
  computed: {
    messageCast() {
      return this.flag ? "Nascondi il cast" : "Scopri il cast";
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #000;
  color: #fff;
  border: none;
  border-bottom: 3px solid red;
  border-radius: 1px;
  text-transform: uppercase;
}
.list-cast {
  list-style-type: none;
  padding: 0;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
  }
}
</style>