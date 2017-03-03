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

export const hslToRgb = ([h, s, l]) => {
  const q = (l < 1 / 2) ? l * (1 + s) : l + s - (l * s)
  const p = 2 * l - q

  const hk = (h % 360) / 360

  const tr = hk + 1 / 3
  const tg = hk
  const tb = hk - 1 / 3

  const tc = [tr, tg, tb]
  for (let n = 0; n < tc.length; n++) {
    let t = tc[n]
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) {
      tc[n] = p + ((q - p) * 6 * t)
    } else if (t < 1 / 2) {
      tc[n] = q
    } else if (t < 2 / 3) {
      tc[n] = p + ((q - p) * 6 * (2 / 3 - t))
    } else {
      tc[n] = p
    }
  }
  for (let n = 0; n < tc.length; n++) {
    tc[n] = Math.round(tc[n] * 255)
  }
  return tc
}

export const hslToHex = ([h, s, l]) => {
  return rgbToHex(hslToRgb([h, s, l]))
}

export const hslToStr = ([h, s, l]) => {
  return rgbToStr(hslToRgb([h, s, l]))
}
