export const getTitleWidth = (text, font = "600 15px Nunito") => {
  const canvas = getTitleWidth.canvas || (getTitleWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");

  context.font = font;

  return context.measureText(text).width;
};