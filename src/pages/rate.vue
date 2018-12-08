<template>
  <router-layout>
    <van-nav-bar title="评分" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div style="text-align:center;padding:20px;">
      <van-rate v-model="value" />
    </div>
    <div style="margin:0 20px;">
      <van-button size="large" type="primary" @click="$router.go(-1)">$router.go(-1)</van-button>
    </div>
  </router-layout>
</template>
<script>
export default {
  data () {
    return {
      value: 3
    }
  }
}
</script>
