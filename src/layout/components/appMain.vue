<template>
  <div>
    <keep-alive :include="keepAliveData">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'appMain',
  computed: {
    keepAliveData () {
      console.log(this.$store.state)
      return this.$store.state.keepAliveData
    }
  }
}
</script>

<style scoped>

</style>
