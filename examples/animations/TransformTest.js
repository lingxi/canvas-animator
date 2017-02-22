import Rect from '../../src/shapes/Rect'
import Circle from '../../src/shapes/Circle'
import Star from '../../src/shapes/Star'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class TransformTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0) {
    super(context, x, y)

    const rect = new Rect(context, 0, 0, 50, 50, 0, '#fff')
    const circle = new Circle(context, 0, 0, 25, 0, '#fff')
    const star = new Star(context, 0, 0, 25, 5, 4, 0, '#fff')

    rect.x = 100
    rect.rotation = Math.PI / 4

    star.x = 100
    star.scale = 2

    this.add(rect)
    this.add(circle)
    this.add(star)
  }
}
