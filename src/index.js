import Bang from './animations/Bang'
import Bangs from './animations/Bangs'
import Circles from './animations/Circles'
import Cube from './animations/Cube'
import Squares from './animations/Squares'
import TweenTest from './animations/TweenTest'

import Shape from './base/Shape'
import ShapeContainer from './base/ShapeContainer'

import Circle from './shapes/Circle'
import Rect from './shapes/Rect'
import Ring from './shapes/Ring'
import Star from './shapes/Star'

import ease from './utils/ease'
import * as filters from './utils/filters'

import Animator from './Animator'

const animator = {
  animations: {
    Bang,
    Bangs,
    Circles,
    Cube,
    Squares,
    TweenTest
  },
  base: {
    Shape,
    ShapeContainer
  },
  shapes: {
    Circle,
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
