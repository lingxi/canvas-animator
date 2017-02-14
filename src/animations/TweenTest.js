import Star from '../shapes/Star'
import ease from '../utils/ease'
import ShapeContainer from '../base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.len = 500

    const R = 75
    const r = 25
    const color = '#000'
    this.star = new Star(this.context, -this.len / 2, 0, 0, R, r, 5, color)
    this.add(this.star)

    const n = 3
    const animLen = this.len / n
    for (let i = 0; i < n; i++) {
      this.star.addTween({
        duration: 1,
        target: { x: -this.len / 2 + (i + 1) * animLen },
        ease: ease.circOut
      })
    }
    this.star.addTween({
      duration: 1,
      target: { x: -this.len / 2 }
    })
    this.star.loop = true
  }
}
