export const determineValidHex = (hex: string) => {
  const regex = /[0-9A-Fa-f]{6}/g;

  return hex.match(regex);
};
