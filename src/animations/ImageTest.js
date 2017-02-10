import Bitmap from '../shapes/Bitmap'
import Pattern from '../shapes/Pattern'
import ShapeContainer from '../base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, img, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)

    this.add(new Pattern(context, 0, -200, 0, 248 * 4, 36 * 5, img))
    this.add(new Bitmap(context, 0, 0, 0, 248, 36, img))
    this.add(new Bitmap(context, 0, 100, 0, 128, 18, img, { x: 0, y: 0, width: 128, height: 18 }))
  }

  update (elapsed) {
    super.update(elapsed)
    this.draw()
  }
}
