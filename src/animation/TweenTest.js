import Star from '../animator/shapes/Star'
import ease from '../animator/ease'
import ShapeContainer from '../animator/shapes/base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.period = 3
    this.len = 500

    const R = 75
    const r = 25
    const color = '#000'
    this.circle = new Star(this.context, -this.len / 2, 0, 0, R, r, 5, color)
    this.add(this.circle)
  }

  update (elapsed) {
    super.update(elapsed)
    this.draw()

    const zero = -this.len / 2
    this.circle.x = zero + ease.circOut(this.progress) * this.len
  }
}
