# Canvas Animator

## Demos
[https://lingxiteam.github.io/canvas-animator/](https://lingxiteam.github.io/canvas-animator/)

## Get Started

### 安装

```
npm i canvas-animator --save
```

### 画一个五角星

```javascript
import animator from 'canvas-animator'

class MyAnimation extends animator.base.ShapeContainer {
  constructor (context = null, x = 0, y = 0) {
    super(context, x, y)

    // 在 (0, 0) 位置创建一个 最大半径为75 最小半径为25 5个角 颜色为#ffff7f 的星
    const star = new animator.shapes.Star(context, 0, 0, 75, 25, 5, '#ffff7f')

    // 把创建的星添加到 MyAnimation 中
    this.add(star)
  }
}

// 获取 canvas 元素
const canvas = document.getElementById('js-canvas')

// 获取 CanvasRenderingContext2D
const context = canvas.getContext('2d')

// 创建动画实例
const myAnimation = new MyAnimation(context, canvas.width / 2, canvas.height / 2)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(myAnimation)
myAnimator.play()

```
