import Rect from '../../src/shapes/Rect'
import ShapeContainer from '../../src/base/ShapeContainer'

export default class DisplayTest extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, img) {
    super(context, x, y)

    const rotaionVel = Math.PI
    const scale = 2
    const r = 25

    const container = new ShapeContainer(context, r, 0)
    const rect = new Rect(context, r, 0, 10, 10, '#ff7f7f')
    rect.lineWidth = 0
    const rectFather = new Rect(context, 0, 0, 10, 10, '#7fff7f')
    rectFather.lineWidth = 0
    const rectGrandFather = new Rect(context, 0, 0, 10, 10, '#7f7fff')
    rectGrandFather.lineWidth = 0

    container.add(rect)
    container.add(rectFather)
    this.add(rectGrandFather)
    this.add(container)

    rect.rotationVel = rotaionVel
    container.rotationVel = rotaionVel
    this.rotationVel = rotaionVel

    rect.scale = scale
    container.scale = scale
    this.scale = scale
  }
}
