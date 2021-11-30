const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const getImage = async (req, res) => {
  const { width, height, blur, format } = req.query;

  const WIDTH = !isNaN(Number(width)) ? Number(width) : null;
  const HEIGHT = !isNaN(Number(height)) ? Number(height) : null;
  const BLUR = !isNaN(Number(blur)) ? Number(blur) : null;

  const IMG_FORMAT_MAP = ["png", "jpg"];
  const IMG_FORMAT =
    IMG_FORMAT_MAP.indexOf(format) > -1 ? format : req.params.format;

  // Build theoretical cache path
  const cachedFilePath = `${path.resolve(".")}/images/cache/${buidFileString([
    req.params.id,
    WIDTH,
    HEIGHT,
    BLUR,
  ])}.${IMG_FORMAT}`;

  // Check if this file exists within cache
  const cache = cacheExists(cachedFilePath);

  // If there is a cached image, return that image
  if (cache) {
    return res.sendFile(cachedFilePath);
  }

  // No cache, so let's create a new modified image
  const originalImage = `${path.resolve(".")}/images/${req.params.id}.${
    req.params.format || IMG_FORMAT
  }`;
  let formatted = sharp(originalImage)
    .resize({ width: WIDTH, height: HEIGHT })
    .toFormat(IMG_FORMAT);

  if (BLUR) {
    formatted.blur(BLUR);
  }

  // Cache modified image and return it
  await formatted.toFile(cachedFilePath, (err, info) => {
    if (err) res.sendStatus(404);
    return res.sendFile(cachedFilePath);
  });
};

const buidFileString = (props) => {
  let validProps = [];
  let fileString = "";
  props.forEach((prop) => {
    if (prop) validProps.push(prop);
    else validProps.push("na");
  });

  validProps.forEach((prop, index) => {
    if (index == validProps.length - 1) {
      fileString += prop;
    } else {
      fileString += prop + "_";
    }
  });

  return fileString;
};

const cacheExists = (path) => {
  return fs.existsSync(path);
};

module.exports = { getImage };
