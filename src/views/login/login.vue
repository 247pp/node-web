<template>
  <div class="login-lyp">
    <div class="wrapper-bg" :style="styleJson"></div>
  </div>
</template>

<script>
import { binbgAjax } from '@/api/login.js'

export default {
  name: 'login',
  data () {
    return {
      styleJson: {
        backgroundImage: ''
      }
    }
  },
  computed: {},
  filters: {},
  watch: {},
  mounted () {
    this.$nextTick(() => {
      binbgAjax().then((res) => {
        console.log(res, '登录界面')
        if (res.data.respCode === '0000') {
          this.styleJson.backgroundImage = `url(https://cn.bing.com/${res.data.data.images[0].url})`
        }
      })
    })
  }
}
</script>

<style lang="less">
@import "login";
</style>
