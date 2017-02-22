# 创建自己的图形

当提供的基本图形不满足你的需要时，你可以继承 Shape 类。
覆盖 Shape 类的 _draw 函数，绘制自己需要的图形。

```javascript
import animator from 'canvas-animator'

export default class MyShape extends animator.base.Shape {
  constructor (context = null, x = 0, y = 0, myArg1, myArg2, ...) {
    super(context, x, y)
    this.myArg1 = myArg1
    this.myArg2 = myArg2
    // ...
  }

  _draw () {
    // 使用 this.context 绘制你需要的图形
    // this.context 是 CanvasRenderingContext2D
    // 不需要考虑 this.x, this.y, this.rotation, this.scale, this.alpha 等
    // 这些在 _draw 调用之前已经应用了
    // 你可以参考 src/shapes/ 下图形的实现
  }
}

```
