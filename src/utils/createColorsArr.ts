import colors from "tailwindcss/colors";

export const createColorsArray = () => {
  const colorNames = Object.keys(colors)
    .filter(color =>
      color !== "inherit" &&
      color !== "current" &&
      color !== "transparent" &&
      color !== "white" &&
      color !== "black" &&
      color !== "lightBlue" &&
      color !== "warmGray" &&
      color !== "trueGray" &&
      color !== "coolGray" &&
      color !== "blueGray"
    );
  
  const colorValues = Object.values(colors)
    .filter(color => color !== "inherit" && color !== "currentColor" && color !== "transparent" && color !== "#000" && color !== "#fff");

  const colorsLength = colorNames.length;

  const newArr = new Array;

  for (let i = 0; i < colorsLength; i++) {
    newArr.push({
      color: colorNames[i] + " - 50",
      hexValue: colorValues[i][50],
      distanceCalculation: 0,
    });

    for (let j = 100; j < 901; j += 100) {
      newArr.push({
        color: colorNames[i] + ` - ${j}`,
        hexValue: colorValues[i][j],
        distanceCalculation: 0,
      });
    };
  };

  return newArr;
};
