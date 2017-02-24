import Shape from './base/Shape'
import ShapeContainer from './base/ShapeContainer'

import Bitmap from './shapes/Bitmap'
import Circle from './shapes/Circle'
import Pattern from './shapes/Pattern'
import Rect from './shapes/Rect'
import Ring from './shapes/Ring'
import Star from './shapes/Star'
import Text from './shapes/Text'

import ease from './misc/ease'
import * as util from './misc/util'

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
    Star,
    Text
  },
  ease,
  util,
  Animator
}

export default animator
