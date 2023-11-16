<template>
  <div>
    <van-empty  v-if="ready" description="功能待开发~~"></van-empty>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'UserPage',
  data () {
    return {
      ready: false
    }
  },
  created () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay: true,
      duration: 1000
    })
    const timer = setInterval(() => {
      this.ready = true
      clearInterval(timer)
    }, 1000)
  }
}

</script>

<style></style>
