import Star from '../animator/shapes/Star'
import Ring from '../animator/shapes/Ring'
import ease from '../animator/ease'
import ShapeContainer from '../animator/shapes/base/ShapeContainer'

const ringColor = '#ffffb2'
const starColor = '#fbe782'
const starLineColor = '#f6c055'

export default class Bang extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, len = 200) {
    super(context, x, y)
    this.period = 0.5
    this.len = len
    this.R = this.len * 0.7
    this.reset()
  }

  reset () {
    super.reset()

    this.ring = new Ring(this.context, 0, 0, 0, 0, 0, ringColor)
    this.add(this.ring)

    this.stars = []
    const countStar = 10
    const starStrokeStyle = starLineColor
    const starFillStyle = starColor
    const rRange = this.len * 0.05
    const RRange = this.len * 0.1
    const lineWidth = this.len * 0.02
    for (let i = 0; i < countStar; i++) {
      const r = 2 + Math.random() * rRange
      const R = r + Math.random() * RRange
      const star = new Star(this.context, 0, 0, 0, R, r, 5, starStrokeStyle, starFillStyle, lineWidth)
      star.dir = i / countStar * Math.PI * 2
      star.len = this.len * Math.random()
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
      star.x = Math.cos(star.dir) * star.len * easedProgress
      star.y = Math.sin(star.dir) * star.len * easedProgress
    }

    if (this.progress <= alphaProgress) {
      const p = this.progress / alphaProgress
      this.ring.r = this.R * ease.quadOut(p)
      this.ring.R = this.R * ease.expoOut(p)
    } else {
      const subProgress = (this.progress - alphaProgress) / (1 - alphaProgress)
      const alpha = 1 - subProgress
      this.ring.alpha = alpha
      for (const star of this.stars) {
        star.alpha = alpha
        star.scale = alpha
      }
    }

    this.draw()
  }
}
