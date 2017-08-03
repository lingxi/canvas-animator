# 创建缓动动画

Shape 类的 addTween 方法可以方便地创建缓动动画

## 示例

运行效果：[https://lingxi.github.io/canvas-animator/docs/use-ease.html](https://lingxi.github.io/canvas-animator/docs/use-ease.html)

```javascript
import animator from '../../src/index'

// 获取 canvas 元素
const canvas = document.getElementById('js-canvas-use-ease')

// 获取 CanvasRenderingContext2D
const context = canvas.getContext('2d')

// 设置 canvas 尺寸
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

// 在 (100, -100) 创建一个 最大半径为75 最小半径为25 5个角 颜色为#fff 的星
const star = new animator.shapes.Star(
  context,
  100, -100,
  40, 15, 5,
  '#ffff3f', 0
)

// 0-1s 到达 (100, 100) 使用 sineInOut 缓动函数
// 1-2s 到达 (-100, 100) 使用 circOut 缓动函数
// 2-3s 到达 (-100, -100) 使用 elasticOut 缓动函数
// 3-4s 到达 (100, -100) 使用 backOut 缓动函数
// 于此同时
// 0-2s 颜色逐渐变为 #3fffff，缩放到2倍，使用默认缓动函数
// 2s-4s 颜色逐渐变为 #ffff3f，缩放到1倍，使用默认缓动函数
star
.addTween({
  duration: 1,
  target: {
    x: 100,
    y: 100,
    rotation: Math.PI
  },
  ease: 'sineInOut'
})
.addTween({
  duration: 1,
  target: {
    x: -100,
    y: 100,
    rotation: Math.PI * 2
  },
  ease: 'circOut'
})
.addTween({
  duration: 1,
  target: {
    x: -100,
    y: -100,
    rotation: Math.PI * 3
  },
  ease: 'elasticOut'
})
.addTween({
  duration: 1,
  target: {
    x: 100,
    y: -100,
    rotation: Math.PI * 4
  },
  complete: () => {
    // 重置角度为 0 使其始终绕一个方向旋转
    star.rotation = 0
  },
  ease: 'backOut'
})
.addTween({
  duration: 2,
  target: {
    fillStyle: '#3fffff',
    scale: 2
  },
  index: 1 // 设置另一组动画，两组动画将同时播放
})
.addTween({
  duration: 2,
  target: {
    fillStyle: '#ffff3f',
    scale: 1
  },
  index: 1
})

// 循环动画
star.loop = true

// 设置一个位于 canvas 中央的 container
const container = new animator.base.ShapeContainer(context, canvas.width / 2, canvas.height / 2)

// 添加到 container 以后 star 的坐标将相对 container 的位置，也就是 canvas 的中央计算
container.add(star)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(container)
myAnimator.play()
```

## animator.base.Shape

* `addTween ({ duration, target, ease, start, update, complete, index })`: 添加缓动动画
    * `duration`: 动画持续时间，单位秒
    * `target`: 目标属性，参考示例代码
    * `ease`: 使用的缓动函数名称，或者一个缓动函数（接收一个 Number 参数，返回一个 Number），默认使用`quadInOut`
    * `start`: （可选）动画开始后时的回调，无参数
    * `update`: （可选）动画每次更新的回调，参数`(progress, easedProgress, elapsed)`，分别为动画完成率（0到1），经过缓动变换的完成率，从上次更新经过的时间（单位秒）
    * `complete`: （可选）动画完成时的回调，无参数
    * `index`: 动画序列的索引。相同索引值的动画串行，不同索引值的动画并行。默认0。
* `addAnim ({ duration, start, update, complete, index })`: 如果 `addTween` 无法满足需求，比如同时使用多个不同缓动函数，可以使用 `addAnim` 进行更直接的操作
    * `duration`: 同`addTween`
    * `start`: 同`addTween`
    * `update`: 动画每次更新的回调，参数`(progress, elapsed)`，分别为动画完成率（0到1），从上次更新经过的时间（单位秒）
    * `complete`: 同`addTween`
    * `index`: 同`addTween`
* `addDelay ({ duration, start, complete, index })`: 添加延迟
    * `duration`: 延迟时间，单位秒
    * `start`: 同`addTween`
    * `complete`: 同`addTween`
    * `index`: 同`addTween`
