export const lerp = (min, max, ratio) => {
  if (typeof min === 'string' && typeof max === 'string' &&
  min.indexOf('#') === 0 && max.indexOf('#') === 0) {
    return lerpColor(min, max, ratio)
  } else {
    return lerpNumber(min, max, ratio)
  }
}

export const lerpNumber = (min, max, ratio) => {
  return min + ratio * (max - min)
}

export const randomNumber = (min, max) => {
  return lerpNumber(min, max, Math.random())
}

export const hexToRgb = hex => {
  const r = (hex & 0xff0000) >> 16
  const g = (hex & 0x00ff00) >> 8
  const b = (hex & 0x0000ff)
  return [r, g, b]
}

export const strToRgb = str => {
  if (str.indexOf('#') === 0) {
    str = str.substr(1)
    return hexToRgb(parseInt(str, 16))
  } else {
    return [0, 0, 0]
  }
}

export const rgbToHex = ([r, g, b]) => {
  return ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff)
}

export const rgbToStr = ([r, g, b]) => {
  const hex = rgbToHex([r, g, b])
  let str = hex.toString(16)
  const strLength = str.length
  if (str.length < 6) {
    for (let i = 0; i < 6 - strLength; i++) {
      str = '0' + str
    }
  }
  return `#${str}`
}

export const lerpColor = (min, max, ratio) => {
  const colorMin = strToRgb(min)
  const colorMax = strToRgb(max)
  const rgb = []
  for (let i = 0; i < 3; i++) {
    rgb[i] = lerpNumber(colorMin[i], colorMax[i], ratio)
  }
  return rgbToStr(rgb)
}

export const randomColor = (min, max) => {
  return lerpColor(min, max, Math.random())
}
