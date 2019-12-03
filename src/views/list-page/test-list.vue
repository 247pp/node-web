<template>
  <div class="test-list">
    <br>
    列表页
    <input type="text">
    <a @click="toPage">
      跳转到详情页面
    </a>
  </div>
</template>

<script>
export default {
  name: 'test-list',
  methods: {
    toPage () {
      this.$store.commit('SET_KEEP_ALIVE', ['test-list'])
      this.$router.push('/test/list-detail')
    }
  },
  activated () {
    this.$store.commit('SET_KEEP_ALIVE', [])
  }
}
</script>

<style scoped>

</style>
