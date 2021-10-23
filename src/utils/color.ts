export function calcColorLuminance(h: string, l: number) {
  let colorCode = h.toString().replace(/[^0-9a-f]/gi, "");
  if (colorCode.length < 6) {
    colorCode =
      colorCode[0] +
      colorCode[0] +
      colorCode[1] +
      colorCode[1] +
      colorCode[2] +
      colorCode[2];
  }

  const colorCodeSplit = colorCode.match(/.{2}/g)!;
  const reducer = (acc: string, cur: string) => {
    const cn = parseInt(cur, 16);
    const cs = Math.round(Math.min(Math.max(0, cn + cn * l), 255)).toString(16);
    return (acc += cs);
  };
  return colorCodeSplit.reduce(reducer, "#");
}
