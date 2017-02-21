import Circle from '../../src/shapes/Circle'
import { sinInOut, back } from '../../src/utils/filters'
import ShapeContainer from '../../src/base/ShapeContainer'

class WavedCircle extends Circle {
  constructor (context = null, x = 0, y = 0, r = 100, color = '#000') {
    super(context, x, y, r, color)
    this.totalTime = 0
    this.period = 2
    this.loop = true
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
  constructor (context = null, x = 0, y = 0) {
    super(context, x, y)
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
      const circle = new WavedCircle(this.context, x, y, r, color)
      circle.deltaTime = i / colors.length * circle.period
      this.add(circle)
    })

    this.rotationVel = Math.PI * 0.2
  }
}
