import Star from '../animator/shapes/Star'
import ease from '../animator/ease'
import ShapeContainer from '../animator/shapes/base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.period = 1
    this.len = 100
    this.reset()
  }

  reset () {
    super.reset()
    this.stars = []
    const countStar = 10
    const starStrokeStyle = '#000'
    const starFillStyle = '#fff'
    for (let i = 0; i < countStar; i++) {
      const r = 2 + Math.random() * 10
      const R = r + Math.random() * 20
      const star = new Star(this.context, 0, 0, 0, R, r, 5, starStrokeStyle, starFillStyle)
      star.dir = i / countStar * Math.PI * 2
      star.rotationVelZ = (Math.random() - 0.5) * 2 * Math.PI * 3
      this.stars.push(star)
      this.add(star)
    }
  }

  update (elapsed) {
    super.update(elapsed)

    const alphaProgress = 0.6
    const easedProgress = ease.expoOut(this.progress)
    for (const star of this.stars) {
      star.x = Math.cos(star.dir) * this.len * easedProgress
      star.y = Math.sin(star.dir) * this.len * easedProgress
      if (this.progress > alphaProgress) {
        star.alpha = 1 - (this.progress - alphaProgress) / (1 - alphaProgress)
      }
    }
    this.draw()
  }
}
