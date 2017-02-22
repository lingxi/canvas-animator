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
  '#fff', 0
)

// 0-1s 到达 (100, 100) 使用 sineInOut 缓动函数
// 1-2s 到达 (-100, 100) 使用 circOut 缓动函数
// 2-3s 到达 (-100, -100) 使用 elasticOut 缓动函数
// 3-4s 到达 (100, -100) 使用 backOut 缓动函数
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

// 循环动画
star.loop = true

// 设置一个位于 canvas 中央的 container
const container = new animator.base.ShapeContainer(context, canvas.width / 2, canvas.height / 2)

// 添加到 container 以后 star 的坐标将相对 container 的位置，也就是 canvas 的中央计算
container.add(star)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(container)
myAnimator.play()
