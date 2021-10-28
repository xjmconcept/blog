---
home: true
heroText: Concept
tagline: 成长记录 平凡之路
actionText: 了解更多 →
actionLink: /
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2021-present Concept
---
## 代码块测试
``` js
/**
 * 按params数组中每个对象的prop值进行快排：小 -> 大
 * @param {Array} params 需要排序的数组
 * @param {String} prop 数组每个元素（对象）中需要属性key
*/
const quickSort = (params, prop) => {
  const arr = JSON.parse(JSON.stringify(params))
  if (arr.length <= 1) { return arr }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i][prop]) < Number(pivot[prop])) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left, prop).concat([pivot], quickSort(right, prop))
}
export default quickSort
```

## Emoji测试
:tada: | :100: | :bamboo: | :gift_heart: | :fire:

## 注释块测试
::: tip 提示
提示内容
:::

## html插入测试
<html>
<!--在这里插入html内容-->
<head>
<style type="text/css">
  .content {
    display: inline-block;
    height: 100px;
    transform:rotate(20deg);
    text-shadow: 2px 4px #ddd;
    color: #666;
    font-size: 28px;
  }
</style>
</head>
<body>
  <div class="content">内容部分</div>
</body>
</html>
