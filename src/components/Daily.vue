<template>
    <li class="card">
        <h2>{{daily.name}}</h2>
        <img :src="daily.icon || 'https://render.guildwars2.com/file/483E3939D1A7010BDEA2970FB27703CAAD5FBB0F/42684.png'" alt="">
        <span>{{daily.id}}</span>
        <p>{{daily.description}}</p>
        <p>{{daily.requirement}}</p>
        <p>{{daily.rewards}}</p>
        
      </li>
</template>

<script>
export default {
    name: 'Daily',
    data: () => {
        return {

        }
    },
    props: {
        daily: {
            name: '',
            icon: '',
            id: '',
            description: '',
            requirement: '',
            rewards: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
