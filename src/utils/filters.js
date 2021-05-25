// 时间转换为周几 
export default [{
    name: "dateToWeak",
    callBack(date) {
      let datelist = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
      return datelist[new Date(date).getDay()]
    }
  },
  {
    name: "arrToOrderText",
    callBack(arr) {
      arr.map((val, index) => `${index + 1}.${val}`)
        .join("<br>")
    }
  },
]