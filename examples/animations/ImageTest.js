import Bitmap from '../../src/shapes/Bitmap'
import Pattern from '../../src/shapes/Pattern'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class TweenTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, img, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)

    const pattern = new Pattern(context, 0, -200, 0, 248 * 4, 36 * 5, img)
    const bitmap = new Bitmap(context, 0, 0, 0, 248, 36, img)
    const bitmapAlpha = new Bitmap(context, 0, 100, 0, 128, 18, img, { x: 0, y: 0, width: 128, height: 18 })
    bitmapAlpha.alpha = 0.5
    bitmapAlpha.filter = 'blur(2px)'
    this.add(pattern)
    this.add(bitmap)
    this.add(bitmapAlpha)
  }
}
