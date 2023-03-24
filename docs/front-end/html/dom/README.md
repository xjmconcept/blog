## DOM和BOM的区别和关联
### BOM
1. BOM是Browser Object Model的缩写，即**浏览器对象模型**。
2. BOM没有相关标准。
3. **BOM的最根本对象是window**。
### DOM
1. DOM是Document Object Model的缩写，即**文档对象模型**。
2. DOM是W3C的标准。
3. **DOM最根本对象是Document（window.document）**。
## DOM事件
### 事件级别
DOM 0级写法：el.onclick=function(){}
> 当希望为同一个元素/标签绑定多个同类型事件的时候（如给上面的这个btn元素绑定3个点击事
> 件），是不被允许的。DOM0事件绑定，给元素的事件行为绑定方法，这些方法都是在当前元素事
> 件行为的冒泡阶段(或者目标阶段)执行的。

DOM 1级：由于DOM 1级中没有事件的相关内容，所以没有DOM 1级事件

DOM 2级写法：el.addEventListener(event-name, callback, useCapture)
> event-name: 事件名称，可以是标准的DOM事件

> callback: 回调函数，当事件触发时，函数会被注入一个参数为当前的事件对象 event

> useCapture: 默认是false，代表事件句柄在冒泡阶段执行。否则为事件捕获阶段执行

DOM 3级写法：和DOM2级一致 只是在DOM 2级事件的基础上添加了更多的事件类型。
> UI事件，当用户与页面上的元素交互时触发，如：load、scroll

> 焦点事件，当元素获得或失去焦点时触发，如：blur、focus

> 鼠标事件，当用户通过鼠标在页面执行操作时触发如：dblclick、mouseup

> 滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel

> 文本事件，当在文档中输入文本时触发，如：textInput

> 键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress

> 合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart

> 变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified
> 同时DOM3级事件也允许使用者自定义一些事件。