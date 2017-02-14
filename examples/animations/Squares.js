import Rect from '../../src/shapes/Rect'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class Squares extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    const size = 100
    const colors = [
      '#00b0df', '#fff',
      '#00e7c3', '#fff',
      '#5c6b8f', '#fff',
      '#9da6e2', '#fff',
      '#79dee7', '#fff'
    ]
    colors.forEach((color, i) => {
      const n = colors.length
      const rectSize = size / n * (n - i)
      const rect = new Rect(context, 0, 0, 0, rectSize, rectSize, color, distance)
      rect.rotationVelZ = Math.PI * (n - i) * 0.1
      this.add(rect)
    })
  }
}
