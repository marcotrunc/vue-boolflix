<template>
  <div>
    <input
      type="text"
      placeholder=""
      v-model.trim="inputText"
      @keyup.enter="passInputText"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    passInputText() {
      this.$emit("set-search", this.inputText);
    },
  },
};
</script>


<style scoped lang="scss">
</style>
