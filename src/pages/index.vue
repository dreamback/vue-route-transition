<template>
  <router-layout>
    <van-nav-bar slot="header" title="首页" />
    <van-cell-group>
      <van-cell title="评分" is-link value="Rate" :to="{path:'/rate'}" />
    </van-cell-group>
    <p style="text-align:center;padding-top:30px">请向下滚动</p>
    <van-cell-group style="margin:300px 0 300px">
      <van-cell title="记录滚动条位置" is-link :to="{path:'/rate'}" />
    </van-cell-group>
    <van-tabbar slot="footer" :fixed="false" v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </router-layout>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
