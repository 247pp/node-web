<template>
  <div class="layout">
    <div class="list">
      <ul>
        <li v-for="(item, idx) in listPage" :key="idx" @click="toPage(item.url)">
          <a>{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <app-main />
  </div>
</template>

<script>
import appMain from './components/appMain.vue'
export default {
  name: 'layout',
  components: {
    appMain
  },
  data () {
    return {
      listPage: [
        {
          name: '列表页',
          url: '/test/test-list'
        },
        {
          name: '列表页2',
          url: '/test/test-list2'
        }
      ]
    }
  },
  methods: {
    toPage (url) {
      console.log('asdf')
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>

</style>
