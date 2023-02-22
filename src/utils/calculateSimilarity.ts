import * as d3 from "d3-color";

// https://github.com/antimatter15/rgb-lab/blob/master/color.js

export const calculateSimilariy = (firstHex: string, secondHex: string): number => {
  const lab1 = d3.lab(firstHex);
  const lab2 = d3.lab(secondHex);

  const deltaL = lab1.l - lab2.l;
  const deltaA = lab1.a - lab2.a;
  const deltaB = lab1.b - lab2.b;

  const c1 = Math.sqrt(Math.pow(lab1.a, 2) + Math.pow(lab1.b, 2));
  const c2 = Math.sqrt(Math.pow(lab2.a, 2) + Math.pow(lab2.b, 2));
  const deltaC = c1 - c2;

  let deltaH = Math.pow(deltaA, 2) + Math.pow(deltaB, 2) - Math.pow(deltaC, 2);
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);

  const sc = 1.0 + 0.045 * c1;
  const sh = 1.0 + 0.015 * c1;

  const deltaLKlsl = deltaL / (1.0);
  const deltaCkcsc = deltaC / (sc);
  const deltaHkhsh = deltaH / (sh);

  const i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;

  return i < 0 ? 0 : Math.sqrt(i);
};
