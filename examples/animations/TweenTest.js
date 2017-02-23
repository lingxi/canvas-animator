import Star from '../../src/shapes/Star'
import ease from '../../src/misc/ease'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0) {
    super(context, x, y)
    this.len = 500

    const R = 75
    const r = 25
    const color = '#ffff7f'
    this.star = new Star(this.context, -this.len / 2, 0, R, r, 5, color)
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
