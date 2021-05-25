<template>
  <div class="study">
    <el-button class="btn" type="danger"
               @click="$router.replace('/')"
               plain>返回首页</el-button>
    <h1 class="w">万事随缘<br />但不要放弃努力</h1>
    <div class="w itemList">
      <section class="item"
               v-for="(item) in dataItemList"
               :key="item.date">
        <p class="date">{{item.date +'    ' +dateToWeak(item.date)}} </p>
        <div class="val">
          <div v-html='arrToOrderText(item.value)'></div>
        </div>
        <div class="val"
             v-if="item.diary"><b>小记：</b>{{item.diary}}</div>
      </section>
    </div>
  </div>
</template>

<script>
import clockInList from "./clockInList"
export default {
  setup () {
    const dataItemList = clockInList

    function dateToWeak (date) {
      let datelist = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
      return datelist[new Date(date).getDay()]
    }

    function arrToOrderText (arr) {
      return arr.map((val, index) => `${index + 1}.${val}`).join("<br>")
    }

    return {
      dataItemList,
      dateToWeak,
      arrToOrderText
    }
  }
}
</script>

<style lang="less" scoped>
.study {
  padding-top: 50px;
  height: 100%;
  background: url("../../assets/image/intro.jpg") no-repeat;
  background-size: cover;
  overflow: auto;
}
.btn{
  opacity: 0.5;
}
.w {
  width: 1200px;
}
.itemList {
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
}
.item {
  background-color: rgb(150, 177, 134);
  border: 1px solid rgb(173, 172, 172);
  opacity: 0.8;
}
.item p {
  font-weight: 700;
  padding: 20px 20px;
  font-size: 20px;
}
.item .val {
  padding: 0px 20px 10px 20px;
  line-height: 20px;
  letter-spacing: 1px;
  font-size: 16px;
  color: rgb(43, 43, 43);
  display: flex;
}
.item .val b {
  width: 52px;
}
h1.w {
  text-align: center;
  color: aliceblue;
  font-size: 90px;
  line-height: 100px;
}

@media screen and (max-width: 800px) {
  body,
  input,
  textarea,
  select {
    font-size: 12pt;
    line-height: 1.5em;
  }
  body .study-herf {
    display: block;
  }
  body .w {
    width: 350px;
  }
  body h1.w {
    font-size: 30px;
    line-height: 50px;
  }
  body .item p {
    font-weight: 700;
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>
