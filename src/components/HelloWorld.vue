<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>PvE Dailies</h2>

    <ul v-for="daily in pve" :key="daily.id">
      <li class="card">
        <h2>{{daily.name}}</h2>
        <img :src="daily.icon || 'https://render.guildwars2.com/file/483E3939D1A7010BDEA2970FB27703CAAD5FBB0F/42684.png'" alt="">
        <span>{{daily.id}}</span>
        <p>{{daily.description}}</p>
        <p>{{daily.requirement}}</p>
        <p>{{daily.rewards}}</p>
        
      </li>
    </ul>

    <h2>PvP Dailies</h2>

    <ul v-for="daily in pvp" :key="daily.id">
      <li class="card">
        <h2>{{daily.name}}</h2>
        <img :src="daily.icon || 'https://render.guildwars2.com/file/483E3939D1A7010BDEA2970FB27703CAAD5FBB0F/42684.png'" alt="">
        <span>{{daily.id}}</span>
        <p>{{daily.description}}</p>
        <p>{{daily.requirement}}</p>
        <p>{{daily.rewards}}</p>
        
      </li>
    </ul>

    <h2>WvW Dailies</h2>

    <ul v-for="daily in wvw" :key="daily.id">
      <li class="card">
        <h2>{{daily.name}}</h2>
        <img :src="daily.icon || 'https://render.guildwars2.com/file/483E3939D1A7010BDEA2970FB27703CAAD5FBB0F/42684.png'" alt="">
        <span>{{daily.id}}</span>
        <p>{{daily.description}}</p>
        <p>{{daily.requirement}}</p>
        <p>{{daily.rewards}}</p>
        
      </li>
    </ul>

    <h2>Fractals Dailies</h2>

    <ul v-for="daily in fractals" :key="daily.id">
      <li class="card">
        <h2>{{daily.name}}</h2>
        <img :src="daily.icon || 'https://render.guildwars2.com/file/483E3939D1A7010BDEA2970FB27703CAAD5FBB0F/42684.png'" alt="">
        <span>{{daily.id}}</span>
        <p>{{daily.description}}</p>
        <p>{{daily.requirement}}</p>
        <p>{{daily.rewards}}</p>
        
      </li>
    </ul>
   </div>
</template>

<script>

import axios from "axios";

const API_ROOT = 'https://api.guildwars2.com'
const ACHIEVEMENTS = '/v2/achievements'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
 
  },
  computed: {
    pve() {
      return this.$store.state.pve
    },
    pvp() {
      return this.$store.state.pvp
    },
    wvw() {
      return this.$store.state.wvw
    },
    fractals() {
      return this.$store.state.fractals
    }
  },
  created () {
    let store = this.$store
    store.dispatch('setDailies').then(()=> {
      
    })

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*"https://d1h9a8s8eodvjz.cloudfront.net/fonts/menomonia/08-02-12/menomonia.css"
"https://d1h9a8s8eodvjz.cloudfront.net/fonts/menomonia/08-02-12/menomonia-italic.css"*/
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  border-radius: 4px;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.3);
  width: 40%;
  padding: 40px;
  font-family: "menomonia";
}
</style>
