<template>
  <div class="w-100 d-flex justify-content-center">
    <img :src="changeFlag(language)" :alt="language" class="img-fluid-flag" />
  </div>
</template>

<script>
export default {
  name: "Flag",
  props: ["language"],
  data() {
    return {
      flags: [
        {
          langString: "it",
          langUrl: "../assets/img/it.png",
        },
        {
          langString: "en",
          langUrl: "../assets/img/en.png",
        },
        {
          langString: "not-found",
          langUrl: "../assets/img/not.png",
        },
      ],
    };
  },
  methods: {
    changeFlag(text) {
      let url = require("../assets/img/not.png");
      //   if I add a flag later, I don't have to change anything
      this.flags.forEach((flag) => {
        if (flag.langString.includes(text)) {
          url = require(`../assets/img/${text}.png`);
        }
      });
      return url;
    },
  },
};
</script>

<style lang="scss" scoped >
.img-fluid-flag {
  width: 20%;
}
</style>