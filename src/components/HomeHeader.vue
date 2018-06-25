<template>
  <div class="HomeHeader">
        <img class="logo" src="../assets/logo.png">
        <span>News</span>
        <!-- <input v-model="inputItem" v-on:keyup.enter="searchKeyword"> -->
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      inputItem: ""
    };
  },
  methods: {
    searchKeyword: function() {
      console.log("searchKeyword: " + this.inputItem);
      this.inputItem = "";
    }
  }
};
</script>
 
<style>
.HomeHeader {
  width: 100%;
  background-color: #d43d3d;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  z-index: 99;
}
.logo {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
</style>