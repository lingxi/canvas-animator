const ease = {}

const pi2 = Math.PI * 2

const getPowIn = pow => {
  return t => Math.pow(t, pow)
}

const getPowOut = pow => {
  return t => 1 - Math.pow(1 - t, pow)
}

const getPowInOut = pow => {
  return t => {
    if ((t *= 2) < 1) return 0.5 * Math.pow(t, pow)
    return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow))
  }
}

const getBackIn = amount => {
  return t => t * t * ((amount + 1) * t - amount)
}

const getBackOut = amount => {
  return t => --t * t * ((amount + 1) * t + amount) + 1
}

const getBackInOut = amount => {
  amount *= 1.525
  return t => {
    if ((t *= 2) < 1) return 0.5 * (t * t * ((amount + 1) * t - amount))
    return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2)
  }
}

const getElasticIn = (amplitude, period) => {
  return t => {
    if (t === 0 || t === 1) return t
    const s = period / pi2 * Math.asin(1 / amplitude)
    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period))
  }
}

const getElasticOut = (amplitude, period) => {
  return t => {
    if (t === 0 || t === 1) return t
    const s = period / pi2 * Math.asin(1 / amplitude)
    return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1)
  }
}

const getElasticInOut = (amplitude, period) => {
  return t => {
    const s = period / pi2 * Math.asin(1 / amplitude)
    if ((t *= 2) < 1) return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period))
    return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1
  }
}

ease.linear = t => t
ease.none = ease.linear

ease.quadIn = getPowIn(2)
ease.quadOut = getPowOut(2)
ease.quadInOut = getPowInOut(2)
ease.cubicIn = getPowIn(3)
ease.cubicOut = getPowOut(3)
ease.cubicInOut = getPowInOut(3)
ease.quartIn = getPowIn(4)
ease.quartOut = getPowOut(4)
ease.quartInOut = getPowInOut(4)
ease.quintIn = getPowIn(5)
ease.quintOut = getPowOut(5)
ease.quintInOut = getPowInOut(5)

ease.sineIn = t => 1 - Math.cos(t * Math.PI / 2)
ease.sineOut = t => Math.sin(t * Math.PI / 2)
ease.sineInOut = t => -0.5 * (Math.cos(Math.PI * t) - 1)

ease.backIn = getBackIn(1.7)
ease.backOut = getBackOut(1.7)
ease.backInOut = getBackInOut(1.7)

ease.circIn = t => -(Math.sqrt(1 - t * t) - 1)
ease.circOut = t => Math.sqrt(1 - (--t) * t)
ease.circInOut = t => {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

ease.bounceIn = t => 1 - ease.bounceOut(1 - t)
ease.bounceOut = t => {
  if (t < 1 / 2.75) {
    return (7.5625 * t * t)
  } else if (t < 2 / 2.75) {
    return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
  } else if (t < 2.5 / 2.75) {
    return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
  } else {
    return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
  }
}
ease.bounceInOut = t => {
  if (t < 0.5) return ease.bounceIn(t * 2) * 0.5
  return ease.bounceOut(t * 2 - 1) * 0.5 + 0.5
}

ease.elasticIn = getElasticIn(1, 0.3)
ease.elasticOut = getElasticOut(1, 0.3)
ease.elasticInOut = getElasticInOut(1, 0.3 * 1.5)

ease.expoIn = t => Math.pow(2, 10 * (t - 1)) - 0.001
ease.expoOut = t => 1 - Math.pow(2, -10 * t)
ease.expoInOut = t => ((t *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))

export default ease
