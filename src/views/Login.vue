<template>
    <div>
        <h1>Login</h1>
        <form>
            <label for="">API Key: </label>
            <input type="text" v-model="apiKey">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: () => {
        return {
            apiKey: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

