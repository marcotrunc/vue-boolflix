<template>
  <div class="bg-dark">
    <section>
      <div class="container">
        <header class="d-flex align-items-center justify-content-between">
          <div><h1 class="text-danger text-uppercase">BoolFlix</h1></div>
          <Search @set-search="setSearch" placeholder="Cerca qui..." />
        </header>
      </div>
    </section>
    <section>
      <div>
        <Main :search="inputText" />
      </div>
    </section>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Search,
    Main,
  },
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    setSearch(text) {
      this.inputText = text;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
