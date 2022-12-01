export function RGBAToHex(rgba: string) {
  const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  if (hexRegex.test(rgba)) return rgba;

  const rgbaOrRgbRegex =
    /^rgba?\((\d{1,3})\,\s(\d{1,3})\,\s(\d{1,3})\,?\s?(\d*(?:\.\d+)?)?\)$/;

  const defaultBlackIfBadRgbaSupplied = '#000000';
  if (!rgbaOrRgbRegex.test(rgba)) {
    return defaultBlackIfBadRgbaSupplied;
  }

  const sep = rgba.indexOf(',') > -1 ? ',' : ' ';

  let startingSplitCharIndex = 4;

  const rgbaValue = 'rgba';
  const rgbValue = 'rgb';
  if (rgba.startsWith(rgbaValue)) {
    startingSplitCharIndex = 4;
  } else if (rgba.startsWith(rgbValue)) {
    startingSplitCharIndex = 3;
  }

  const parenthesisRegex = /[()]/;

  const rgbaStr = rgba.substring(startingSplitCharIndex);

  const [_emptyStr, rgbaArrWithoutParenthesis] =
    rgbaStr.split(parenthesisRegex);

  const rgbaArrStr = rgbaArrWithoutParenthesis.split(sep);
  const rgbaArr = rgbaArrStr.map(Number);

  const rgbToHexStartArr = rgbaArr.map((num) => num.toString(16));

  const rgbArrLengthWithoutOpacity = 3;
  const rgbToHexResultArr = [];
  for (let i = 0; i < rgbArrLengthWithoutOpacity; i++) {
    const str = rgbToHexStartArr[i];

    if (str.length === 1) rgbToHexResultArr.push(`0${str}`);
    rgbToHexResultArr.push(str);
  }

  return `#${rgbToHexResultArr.join('')}`;
}
