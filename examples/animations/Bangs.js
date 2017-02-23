import Bang from './Bang'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class Bangs extends ShapeContainer {
  constructor (context = null) {
    super(context)
    const createBang = () => {
      const x = context.canvas.width * Math.random()
      const y = context.canvas.height * Math.random()
      const bang = new Bang(context, x, y)
      this.add(bang)
    }
    setInterval(createBang, 200)
  }
}
