# Canvas Animator

没有其他依赖的 canvas 动画库

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

// 获取 canvas 元素
const canvas = document.getElementById('js-canvas')

// 获取 CanvasRenderingContext2D
const context = canvas.getContext('2d')

// 在 canvas的中央 创建一个 最大半径为75 最小半径为25 5个角 颜色为#ff7f00 的星
const star = new animator.shapes.Star(
  context,
  canvas.width / 2, canvas.height / 2,
  75, 25, 5,
  '#ff7f00', 0
)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(star)
myAnimator.play()

```

## 更多

* [基本图形](docs/base.md)  
* [创建自己的图形](docs/extends-shape.md)  
* [控制动画](docs/animator.md)
* [组合图形](docs/use-container.md)  
* [创建缓动动画](docs/use-ease.md)  
* [缓动函数列表](docs/ease.md)  
