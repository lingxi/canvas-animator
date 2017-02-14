import Shape from './base/Shape'
import ShapeContainer from './base/ShapeContainer'

import Bitmap from './shapes/Bitmap'
import Circle from './shapes/Circle'
import Pattern from './shapes/Pattern'
import Rect from './shapes/Rect'
import Ring from './shapes/Ring'
import Star from './shapes/Star'

import ease from './utils/ease'
import * as filters from './utils/filters'

import Animator from './Animator'

const animator = {
  base: {
    Shape,
    ShapeContainer
  },
  shapes: {
    Bitmap,
    Circle,
    Pattern,
    Rect,
    Ring,
    Star
  },
  utils: {
    ease,
    filters
  },
  Animator
}

window.animator = animator
export default animator
