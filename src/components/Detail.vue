<template>
  <div class="Detail">
        <div class="Header">
            <img class="back" src="../assets/back.png" @click="goBack"></img>
            <span>Back</span>
        </div>
        <div class="article">
            <div class="container">
                <div class="title">{{channelNewData &&　channelNewData.title}}</div>
                <div class="message">
                    <span>{{channelNewData && channelNewData.time || 'Unknown Time'}}</span>
                    <span>{{channelNewData && channelNewData.src || 'MyFeeds'}}</span>
                </div>
                <img :src="channelNewData && channelNewData.pic || require('../assets/tongyong.jpg')">
                <div class="newsContent" v-html="channelNewData && channelNewData.content"></div>
            </div>
        </div>
  </div>
</template>


<script>
export default {
    computed: {
        channelNewData() {
            return this.$store.state.channelData[this.$store.state.newDataIndex]
        }
    },
    methods: {
        goBack: function () {
            this.$router.push('/')
        }
    }
}
</script>

<style>
.Header {
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #d43d3d;
  display: flex;
  position: fixed;
  /* justify-content: left; */
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 99;
}
.back {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.article {
  padding-top: 3rem;
}
.container {
  margin: 20px;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.message {
  text-align: center;
  margin: 20px 0;
  color: #888;
}
.message span:last-child {
  margin-left: 10px;
}
.container img {
  width: 100%;
  margin-bottom: 2rem;
}
.newsContent {
  font-size: 18px;
  line-height: 33px;
}
</style>