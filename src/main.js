// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.debug = true

Vue.use(Vuex)
Vue.prototype.$http = axios

const store = new Vuex.Store({
  state: {
    channels: '',
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',
    isActive: 0,
    load: true
  },
  mutations: {
    muChannels (state, data) {
      state.channels = data
    },
    muChannelIndex (state, index) {
      state.channelIndex = index
    },
    muGetData (state, data) {
      state.channelData = data
    },
    muNewDataIndex (state, index) {
      state.newDataIndex = index
    },
    increment (state, index) {
      state.channels.splice(index, 1)
    },
    decrement (state, item) {
      state.channels.push(item)
    },
    loading (state, statu) {
      state.load = statu
    },
    muIsActive (state, index) {
      state.isActive = index
    }
  },
  actions: {
    acChannels ({ commit, state }) {
      // commit('muChannels', ['头条', '新闻', '财经', '体育', '娱乐', '军事', '教育', '科技', 'NBA', '股票', '星座', '女性', '健康', '育儿'])
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/api/channels')
          .then(res => {
            commit('muChannels', res.data.result)
          })
        resolve()
      })
    },
    acGetData ({ commit, state }, channel) {
      // store.state.load = false
      commit('loading', false)

      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/api/channel/' + 'reco') // mock
          .then(res => {
            commit('muGetData', res.data.result.list)
            store.state.load = false
          })
        resolve()
      })
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
