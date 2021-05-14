<!--
 * @Author: hongdong.liao
 * @Date: 2021-05-07 14:55:57
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 19:09:38
 * @FilePath: /microDemo/demo-web/demo-web-system/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav" style="float: left;">
      system 应用
      <input v-model="data" />
      <div @click="sendMessage">点击发送消息</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { setState } from '@/utils/app-store'

export default {
  data () {
    return {
      data: 'system 的默认消息'
    }
  },
  methods: {
    sendMessage () {
      setState({
        message: this.data
      })
    }
  }
}
</script>
