<template>
  <router-layout>
    <van-nav-bar slot="header" title="评分" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div style="text-align:center;padding:20px;">
      <van-rate v-model="value" />
    </div>
    <div style="margin:0 20px;">
      <van-button size="large" type="primary" @click="$router.go(-1)">$router.go(-1)</van-button>
    </div>
    <p style="text-align:center;padding-top:30px">该页面路由配置了 meta: {keepAlive: false}<br>关闭了缓存功能</p>
    <van-cell-group style="margin:300px 0 300px">
      <van-cell title="更多" is-link :to="{path:'/demo'}" />
    </van-cell-group>
  </router-layout>
</template>
<script>
export default {
  data () {
    return {
      value: 3
    }
  },
  mounted () {

  }
}
</script>
