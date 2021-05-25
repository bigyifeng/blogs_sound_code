<template>
  <div class="main">
    <h1 class="hide">洪一锋</h1>
    <div id="app">
      <div class="header_bg">
        <header class="w">
          <div class="title">易风 YiFeng</div>
          <ul class="nav">
            <li v-for="item in navList"
                :key="item.href">
              <span class="menu-text"
                    @click="$router.push(item.route)">
                {{ item.text }}</span>
            </li>
          </ul>
          <div class="right">
            <a href="https://github.com/bigyifeng/bigyifeng.github.io"
               class="blog-github iconfont github">
              GitHub
            </a>
          </div>
        </header>
      </div>
      <div class="banner" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
export default {
  name: "Main",
  setup () {
    const data = reactive({
      navList: [
        { text: "个人简历（建设中）", route: "./src/404.html" },
        { text: "收藏（建设中）", route: "./src/404.html" },
        { text: "学习打卡", route: "/study" },
        { text: "进入后台（建设中）", route: "./src/404.html" },
        { text: "联系方式（建设中）", route: "./src/404.html" },
      ],
    })


    return {
      ...data
    }
  }
}
</script>

<style scoped lang="less">
.main {
  min-width: 1200px;
}
.header_bg {
  background-color: var(--theme-bg-color);
  height: 72px;
  header {
    height: 100%;
    display: flex;
    line-height: 72px;
    color: #2b2e2e;
    .title {
      font-size: 22px;
      color: #0555da;
      font-weight: bold;
      width: 200px;
    }
    .nav {
      display: flex;
      justify-content: space-around;
      flex: 1;
      .menu-text {
        display: block;
        padding: 0;
        height: 72px;
        font-size: 16px;
        font-weight: bold;
        line-height: 72px;
        opacity: 0.95;
        position: relative;
        color: #2b2e2e;
        cursor: pointer;
      }
      .menu-text:hover {
        color: #0555da;
      }
    }
  }
}

.right {
  line-height: 72px;
}
.github {
  display: block;
  font-size: 25px;
  cursor: pointer;
  height: 72px;
  transform: translateY(-4px);
}
.github::before {
  font-size: 35px;
  transform: translateY(-4px);
  position: relative;
  top: 4px;
}
.banner {
  margin: 0 auto;
  width: 100%;
  height: 640px;
  background: url("https://assets-service.obs.cn-south-1.myhuaweicloud.com/test/mp_562497b0-7fbc-11eb-b1f2-4de4946d79ce/b7fcc1c0-4f83-4f37-a070-cb88511c51e4.png")
    no-repeat top;
  background-size: cover;
}
</style>
