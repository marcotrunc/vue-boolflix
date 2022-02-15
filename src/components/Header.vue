<template>
  <div class="container">
    <div>
      <input
        type="text"
        placeholder=""
        v-model.trim="inputText"
        @keyup.enter="passInputText"
      />
      <button class="btn btn-primary" @click="passInputText">Invia</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

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
