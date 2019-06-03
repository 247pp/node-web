<template>
  <div class="login-lyp">
    <div class="wrapper-bg">
      <img :src="BGIMG" alt="">
      <div class="login_box">
        <h3 class="login_title">
          主人请登录
        </h3>
        <Form ref="formInline" :model="loginParams" :rules="loginRules" inline>
          <FormItem prop="username">
            <Input type="text" :maxlength="22" v-model="loginParams.username" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" :maxlength="16" v-model="loginParams.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
        <Checkbox v-model="passwordBfalse" :value="passwordBfalse">
          记住密码
        </Checkbox>
        <Button type="primary" :loading="loading" @click="btnLoginOnClick('formInline')">
          <span v-if="!loading">登录</span>
          <span v-else>登录中。。。</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { binbgAjax, login } from '@/api/login.js'
import BGIMG from '@/assets/bg.jpg'

export default {
  name: 'login',
  data () {
    return {
      // 是否记住密码
      passwordBfalse: false,
      // 按钮的加载事件
      loading: false,
      BGIMG: '',
      // 登录参数
      loginParams: {
        username: '',
        password: ''
      },
      // 校验form
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
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
      }).catch((err) => {
        this.BGIMG = BGIMG
        console.log(err)
      })
    },
    login () {
      console.log(this.loginParams)
      this.loading = true
      login(this.loginParams).then((res) => {
        console.log(res)
        this.loading = false
        if (res.data.respCode === '0000') {
          if (res.data.data.isSuccess) {
            sessionStorage.setItem('login', '{ isLogin: true }')
            if (this.passwordBfalse) {
              localStorage.setItem('checkoutUser', JSON.stringify(this.loginParams))
            } else {
              localStorage.removeItem('checkoutUser')
            }
            this.$router.replace({ name: 'home' })
          } else {
            this.$Message.error({
              content: '账号或密码错误！',
              duration: 2
            })
          }
        }
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },
    // 提交登录时间
    btnLoginOnClick (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login()
        }
      })
    },
    checkoutPassword () {
      console.log(localStorage, '查询本地缓存')
      if (localStorage.checkoutUser) {
        let userInfo = JSON.parse(localStorage.checkoutUser)
        this.loginParams.username = userInfo.username
        this.loginParams.password = userInfo.password
        this.passwordBfalse = true
        this.$set(this.$data, 'loginParams', this.loginParams)
      } else {
        this.passwordBfalse = false
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 调用背景
      this.binbgAjax()
      // 调用是否记住密码
      this.checkoutPassword()
    })
  }
}
</script>

<style lang="less">
@import "login";
</style>
