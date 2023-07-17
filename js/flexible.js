// 自适应布局代码块，用于设置 rem 单位和处理高清屏幕下的像素问题

// 输出设备及浏览器宽高
console.log(window.devicePixelRatio);//像素比
console.log(screen.width);//屏幕宽度
console.log(screen.availWidth);//屏幕可用宽度。即屏幕宽度减去左右任务栏后的宽度
console.log(window.outerWidth);//浏览器宽度
console.log(window.innerWidth);//浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。
console.log(document.body.offsetWidth);// body总宽度
console.log(document.body.clientWidth);// body展示的宽度；表示body在浏览器内显示的区域宽度

// 获取设备像素比（默认为1）@important!!!
var dpr = window.devicePixelRatio || 1;
(function flexible(window, document) {
  // 获取根元素
  var docEl = document.documentElement;
  // 调整页面 body 的字体大小
  function setBodyFontSize() {
    if (document.body) {
      // 将 body 字体大小设置为设备像素比的 12 倍
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      // 如果 body 元素还不存在，则等待 DOMContentLoaded 事件触发后再执行设置字体大小的操作
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置 rem 单位大小（1rem = 1/24 屏幕宽度）
  function setRemUnit() {
    // 计算 1rem 的值为屏幕宽度除以 24
    var rem = docEl.clientWidth / 24;
    docEl.style.fontSize = rem + "px";
  }
  setRemUnit();

  // 当页面大小改变时重新设置 rem 单位大小
  window.addEventListener("resize", setRemUnit);

  // 在页面显示（加载）时重新设置 rem 单位大小
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // 检测是否支持 0.5px 的边框，用于处理高清屏幕下边框显示的问题
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    // 如果边框高度为 1px，则说明不支持 0.5px 边框，给根元素添加类名 "hairlines"
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);

// 设置缩放比例
dpr=1920/document.body.clientWidth;
console.log(dpr);

// //全屏显示
// document.documentElement.requestFullscreen("body");