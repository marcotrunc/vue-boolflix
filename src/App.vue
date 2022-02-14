<template>
  <div>
    <Header @set-search="setSearch" />
    <Main :search="inputText" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
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
