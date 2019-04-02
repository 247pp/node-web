<template>
  <div class="login-lyp">
    <div class="wrapper-bg">
      <img :src="BGIMG" alt="">
      <div class="login_box">
        <h3 class="login_title">
          主人请登录
        </h3>
        <Form ref="formInline" :model="loginParams" :rules="loginRules" inline>
          <FormItem prop="user">
            <Input type="text" v-model="loginParams.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginParams.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
        <Checkbox :value="false">
          记住密码
        </Checkbox>
        <Button type="primary">登录</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { binbgAjax } from '@/api/login.js'
import BGIMG from '@/assets/bg.jpg'

export default {
  name: 'login',
  data () {
    return {
      BGIMG: '',
      styleJson: {
        backgroundImage: 'url(../../assets/bg.jpg)'
      },
      loginParams: {},
      loginRules: {
        user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '最少6位哦~', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  filters: {},
  watch: {},
  methods: {
    // 调取bin网站的背景图片
    binbgAjax () {
      binbgAjax().then((res) => {
        console.log(res, '登录界面')
        if (res.data.respCode === '0000') {
          this.BGIMG = `https://cn.bing.com/${res.data.data.images[0].url}`
          return false
        }
        this.BGIMG = BGIMG
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 调用背景
      this.binbgAjax()
    })
  }
}
</script>

<style lang="less">
@import "login";
</style>
