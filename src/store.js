import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex);

const API_ROOT = 'https://api.guildwars2.com'
const DAILIES_IDS = '/v2/achievements/daily'
const ACHIEVEMENTS = '/v2/achievements'



export default new Vuex.Store({
  state: {
    dailies: [],
    pve: [],
    pvp: [],
    wvw: [],
    fractals: []
  },
  mutations: {
    setDailies(state, payload) {
      state.dailies = payload
    },
    setPVE(state, payload) {
      state.pve = payload
    },
    setPVP(state, payload) {
      state.pvp = payload
    },
    setWVW(state, payload) {
      state.wvw = payload
    },
    setFractals(state, payload) {
      state.fractals = payload
    },
  },
  actions: {
    setDailies({commit, dispatch}) {
      axios.get(`${API_ROOT}${DAILIES_IDS}`)
        .then((response) => {
          
          commit('setDailies', response.data)
          dispatch('setPVE', response.data)
          dispatch('setPVP', response.data)
          dispatch('setWVW', response.data)
          dispatch('setFractals', response.data)
        })
      },
      setPVE({commit}, array) {
        let ids = []
        for (let i = 0; i < array.pve.length; i++) {
          ids[i] = array.pve[i].id
        }
        let endpoint = `${API_ROOT}${ACHIEVEMENTS}?ids=${ids.join()}`
        getDailyFor(endpoint).then(function(data) {
          commit('setPVE', data)
        }) 
      },
      setPVP({commit}, array) {
        let ids = []
        for (let i = 0; i < array.pvp.length; i++) {
          ids[i] = array.pvp[i].id
        }
        let endpoint = `${API_ROOT}${ACHIEVEMENTS}?ids=${ids.join()}`
        getDailyFor(endpoint).then(function(data) {
          commit('setPVP', data)
        }) 
      },
      setWVW({commit}, array) {
        let ids = []
        for (let i = 0; i < array.wvw.length; i++) {
          ids[i] = array.wvw[i].id
        }
        let endpoint = `${API_ROOT}${ACHIEVEMENTS}?ids=${ids.join()}`
        getDailyFor(endpoint).then(function(data) {
          commit('setWVW', data)
        }) 
      },
      setFractals({commit}, array) {
        let ids = []
        for (let i = 0; i < array.fractals.length; i++) {
          ids[i] = array.fractals[i].id
        }
        let endpoint = `${API_ROOT}${ACHIEVEMENTS}?ids=${ids.join()}`
        getDailyFor(endpoint).then(function(data) {
          commit('setFractals', data)
        }) 
      },

    } // END ACTIONS
    
})

function getDailyFor(endpoint) {
  return axios.get(endpoint)
    .then((response) => {
      
      return response.data  
    })   
}