<template>
  <div class="err404">
    <p>您访问的页面不见了！</p>
    <el-button type="danger"
               @click="$router.replace('/')"
               plain>返回首页</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.err404 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 50px;
    margin-bottom: 50px;
  }
}
</style>