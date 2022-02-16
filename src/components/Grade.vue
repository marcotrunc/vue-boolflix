<template>
  <div>
    <i
      v-for="n in voteMax"
      :key="'A' + n"
      class="fa-star"
      :class="n <= voteFin ? 'fas' : 'far'"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Grade",
  props: ["vote"],
  data() {
    return {
      voteMax: 5,
    };
  },
  computed: {
    voteFin() {
      return Math.ceil(this.vote / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>