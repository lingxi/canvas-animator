import animator from '../../src/index'

// 获取 canvas 元素
const canvas = document.getElementById('js-canvas-use-container-as-shape')

// 获取 CanvasRenderingContext2D
const context = canvas.getContext('2d')

// 设置 canvas 尺寸
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

// 创建一个 ShapeContainer，并添加 4 个圆上去
const bigShape = new animator.base.ShapeContainer(context, -200, 0)
const Circle = animator.shapes.Circle
bigShape.add(new Circle(context, 50, 0, 15, '#fff', 0))
bigShape.add(new Circle(context, 0, 50, 15, '#fff', 0))
bigShape.add(new Circle(context, -50, 0, 15, '#fff', 0))
bigShape.add(new Circle(context, 0, -50, 15, '#fff', 0))

// 可以将 ShapeContainer 当作 Shape 来用
bigShape.rotationVel = Math.PI * 2

// 添加缓动动画
bigShape
.addTween({
  duration: 1,
  target: {
    x: 200,
    scale: 2
  }
})
.addTween({
  duration: 1,
  target: {
    x: -200,
    scale: 1
  }
})
bigShape.loop = true

// 设置一个位于 canvas 中央的 rootContainer
const rootContainer = new animator.base.ShapeContainer(context, canvas.width / 2, canvas.height / 2)
rootContainer.add(bigShape)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(rootContainer)
myAnimator.play()
