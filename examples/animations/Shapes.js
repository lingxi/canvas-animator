import animator from '../../src'

export default class TransformTest extends animator.base.ShapeContainer {
  constructor (context = null, x = 0, y = 0) {
    super(context, x, y)

    const Polygon = animator.shapes.Polygon
    const hslToStr = animator.util.hslToStr

    const n = 9
    const grid = 120
    const zero = -(n - 1) * grid / 2
    for (let i = 0; i < n; i++) {
      this.add(new Polygon(context, zero + grid * i, 0, 50, 3 + i, hslToStr([360 / n * i, 1, 0.7])))
    }
  }
}
