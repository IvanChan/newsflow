<template>
  <div class="index">
    <HomeHeader class="pos-header"></HomeHeader>
    <ChannelsBar class="pos-bar"></ChannelsBar>
    <div class="newsContent">
      <div v-show="isLoading" class="loading">
        <img src="../assets/loading.png">
      </div>
        <!-- <carousel v-show="this.$store.state.channelIndex === 0"></carousel> -->
      <div class="section" v-for="(item, index) in newData" @click="toDetail(item, index)">
        <div class="news">
          <div class="news-left">
              <img :src="item.pic || require('../assets/tongyong.jpg')">
          </div>
          <div class="news-right">
            <div class="newsTitle">{{item.title}}</div>
            <div class="newsMessage">
              <span>{{item.time || 'Unknown Time'}}</span>
              <span>{{item.src || 'MyFeeds'}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelsBar from '@/components/ChannelsBar.vue'
import HomeHeader from '@/components/HomeHeader.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.load
    },
    newData () {
      return this.$store.state.channelData
    }
  },
  methods: {
    toDetail (item, index) {
      this.$store.commit('muNewDataIndex', index)
      this.$router.push('/detail')
    }
  },
  components: { ChannelsBar, HomeHeader }
}
</script>

<style lang="css" scoped>
.pos-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
}
.pos-bar {
  position: fixed;
  top: 3rem;
  left: 0;
  height: 2.5rem;
}
.newsContent {
  padding-top: 5.5rem;
}
.loading {
  position: absolute;
  top: 5.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  z-index: 99;
}
.loading img {
  margin-top: 30px;
  width: 50px;
  height: 50px;
  animation: loading 0.6s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.section {
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid #ccc;
}
.news {
  height: 5rem;
  box-sizing: border-box;
  margin: 10px 10px;
  display: flex;
}
.news-left {
  height: 100%;
  width: 5rem;
  display: inline-block;
}
.news-left img {
  width: 100%;
  height: 100%;
}
.news-right {
  flex: 1;
  padding-left: 10px;
}
.newsTitle {
  width: 100%;
  height: 62%;
  color: #404040;
  font-size: 20px;
  overflow: hidden;
}
.newsMessage {
  width: 100%;
  height: 38%;
  display: flex;
  align-items: flex-end;
  color: #888;
  justify-content: space-between;
}
</style>
