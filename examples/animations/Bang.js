import Star from '../../src/shapes/Star'
import Ring from '../../src/shapes/Ring'
import ease from '../../src/misc/ease'
import ShapeContainer from '../../src/base/ShapeContainer'

const RING_COLOR = '#ffffb2'
const STAR_COLOR = '#fbe782'
const STAR_LINE_COLOR = '#f6c055'

export default class Bang extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, len = 200) {
    super(context, x, y)
    this.len = len // 星星炸开的距离
    this.R = this.len * 0.7 // 环形炸开的半径
    this.reset()
  }

  reset () {
    super.reset()

    this.ring = new Ring(this.context, 0, 0, 0, 0, RING_COLOR)
    this.add(this.ring)

    this.stars = []
    const countStar = 10
    const starStrokeStyle = STAR_LINE_COLOR
    const starFillStyle = STAR_COLOR
    const rRange = this.len * 0.05
    const RRange = this.len * 0.1
    const lineWidth = this.len * 0.02
    for (let i = 0; i < countStar; i++) {
      const r = 2 + Math.random() * rRange
      const R = r + Math.random() * RRange
      const star = new Star(this.context, 0, 0, R, r, 5, starFillStyle, starStrokeStyle)
      star.lineWidth = lineWidth
      star.dir = i / countStar * Math.PI * 2
      star.len = this.len * Math.random()
      star.rotationVel = (Math.random() - 0.5) * 2 * Math.PI * 3
      this.stars.push(star)
      this.add(star)
    }

    this.addAnim({
      duration: 0.3,
      update: (progress, elapsed) => {
        const quadOutProgress = ease.quadOut(progress)
        const expoOutProgress = ease.expoOut(progress)
        this.ring.r = this.R * quadOutProgress
        this.ring.R = this.R * expoOutProgress
      }
    })
    .addAnim({
      duration: 0.2,
      update: (progress, elapsed) => {
        const alpha = 1 - progress
        this.ring.alpha = alpha
        for (let i = 0; i < this.stars.length; i++) {
          const star = this.stars[i]
          star.alpha = alpha
          star.scale = alpha
        }
      }
    })
    .addAnim({
      duration: 0.5,
      update: (progress, elapsed) => {
        const expoOutProgress = ease.expoOut(progress)
        for (let i = 0; i < this.stars.length; i++) {
          const star = this.stars[i]
          star.x = Math.cos(star.dir) * star.len * expoOutProgress
          star.y = Math.sin(star.dir) * star.len * expoOutProgress
        }
      },
      index: 1
    })
  }
}
