import Circle from '../animator/shapes/Circle'
import { sinInOut, back } from '../animator/shapes/base/Filters'
import ShapeContainer from '../animator/shapes/base/ShapeContainer'

class WavedCircle extends Circle {
  constructor (context = null, x = 0, y = 0, z = 0, r = 100, color = '#000', distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, r, color, distance)
    this.totalTime = 0
    this.period = 2
    this.deltaTime = 0
  }
  update (elapsed) {
    const totalTime = this.totalTime + this.deltaTime
    const progress = (totalTime - Math.floor(totalTime / this.period) * this.period) / this.period
    this.scale = 1 + sinInOut(back(progress)) * 0.75

    this.totalTime += elapsed
    super.update(elapsed)
  }
}

export default class Circles extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    const colors = [
      '#00b0df',
      '#00e7c3',
      '#5c6b8f',
      '#9da6e2',
      '#79dee7',
      '#ffdb7d',
      '#ff88eb'
    ]
    const R = 50
    const r = 8
    colors.forEach((color, i) => {
      const rad = Math.PI * 2 * i / colors.length
      const x = R * Math.cos(rad)
      const y = R * Math.sin(rad)
      const circle = new WavedCircle(this.context, x, y, 0, r, color)
      circle.deltaTime = i / colors.length * circle.period
      this.add(circle)
    })

    this.rotationVelZ = Math.PI * 0.2
  }

  update (elapsed) {
    super.update(elapsed)
    this.draw()
  }
}
