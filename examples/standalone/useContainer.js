import animator from '../../src/index'

// 获取 canvas 元素
const canvas = document.getElementById('js-canvas-use-container')

// 获取 CanvasRenderingContext2D
const context = canvas.getContext('2d')

// 设置 canvas 尺寸
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

// 在原点创建一个四角星
const cross = new animator.shapes.Star(context, 0, 0, 30, 5, 4, '#ffffff', 0)

// 在原点创建一个五角星
const star = new animator.shapes.Star(context, 0, 0, 40, 15, 5, '#ffff3f', 0)

// 在原点创建一个正方形
const rect = new animator.shapes.Rect(context, 0, 0, 50, 50, '#3fffff', 0)

// 设置一个位于 (100, 0) 的 parentContainer，并旋转 45 度
const parentContainer = new animator.base.ShapeContainer(context, 100, 0)
parentContainer.rotation = Math.PI / 4

// 设置一个位于 (100, 0) 的 childContainer
const childContainer = new animator.base.ShapeContainer(context, 100, 0)

// 设置一个位于 canvas 中央的 rootContainer
const rootContainer = new animator.base.ShapeContainer(context, canvas.width / 2, canvas.height / 2)

// container 间的相互关系
// 把 parentContainer 放到 rootContainer 上
rootContainer.add(parentContainer)

// 把 childContainer 放到 parentContainer 上
parentContainer.add(childContainer)

// 放置图形
// 把四角星放到 rootContainer 上
rootContainer.add(cross)

// 把正方形放到 parentContainer 上
parentContainer.add(rect)

// 把五角星放到 childContainer 上
childContainer.add(star)

// 创建动画播放器并播放
const myAnimator = new animator.Animator(rootContainer)
myAnimator.play()

/**
 * 虽然正方形和五角星的坐标都是 { x: 0, y: 0 }
 * 但因为所属的 Container 不同，相当于存在于不同的坐标系中，最终出现在了不同位置
 * 并且都随着 parentContainer 旋转了 45 度
 */
