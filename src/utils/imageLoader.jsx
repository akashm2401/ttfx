// src/utils/imageLoader.js
const images = require.context(
  "../assets/updated_graphics",
  false,
  /\.(jpg|jpeg|png)$/
);

export const getImage = (imageName) => {
  try {
    return images(`./${imageName}`);
  } catch (err) {
    console.error(`Image ${imageName} not found.`);
    return "/defaultImage.jpg"; // Fallback image
  }
};
