<template>
  <div class="home">
    <Tree :data="data1"></Tree>
  </div>
</template>

<script>
import { homeTree } from '@/api/home'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      data1: [
        {
          title: 'parent 1',
          expand: false,
          children: []
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      homeTree().then((res) => {

      })
    })
  }
}
</script>
