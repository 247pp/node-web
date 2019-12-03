<template>
  <div class="test-list2">
    <br>
    列表2
    <input type="text">
    <a @click="$router.push('/test/list2-detail')">
      跳转到详情页面2
    </a>
  </div>
</template>

<script>
export default {
  name: 'test-list2'
}
</script>

<style scoped>

</style>
