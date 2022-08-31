import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder =
  rootFolder === "gulp" || rootFolder === "src" ? "./dist" : rootFolder;
const srcFolder = "./src";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/`,
  },
  src: {
    js: `${srcFolder}/js/index.js`,
    scss: `${srcFolder}/scss/app.scss`,
    svg: `${srcFolder}/img/**/*.svg`,
    html: `${srcFolder}/*.{php,html}`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.{html,php}`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,webp,png,svg,ico,gif}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ``,
};
