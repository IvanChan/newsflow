<template>
  <div class="ChannelsBar">
    <div class="channel">
      <ul>
        <li v-for="(channel, index) in channels" :class="{ active : isActive === index }" @click="channelClicked(channel,index)">
          {{ channel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelsBar",
  created () {
    this.$store.commit('loading', true)
    this.$store.dispatch('acChannels')
    this.$store.dispatch('acGetData', '头条')
  },
  computed: {
    channels () {
      return this.$store.state.channels
    },
    newData () {
      return this.$store.state.channelData
    },
    isLoading () {
      return this.$store.state.load
    },
    isActive () {
      return this.$store.state.isActive
    }
  },
  methods: {
    channelClicked: function (channel, index) {
      this.$store.state.channelData = "";
      scrollTo(0, 0);
      this.$store.commit("loading", true);
      // this.isActive = index
      this.$store.commit("muChannelIndex", index);
      this.$store.commit("muIsActive", index);
      this.$store.dispatch(
        "acGetData",
        this.$store.state.channels[this.$store.state.channelIndex]
      );
    }
  }
};
</script>
 
<style>
.ChannelsBar {
  width: 100%;
  background-color: #f4f5f6;
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 99;
}
.channel {
  display: inline-block;
  flex: 1;
  white-space: nowrap;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  font-size: 1rem;
  color: #505050;
}
.active {
  color: red;
}
</style>