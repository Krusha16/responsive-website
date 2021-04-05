const {src, dest, series} = require('gulp');

function htmlTask(){
  return src('src/*html')
  .pipe(dest('dist'))
}

function imagesTask(){
  return src('src/images/*')
  .pipe(dest('dist/images'))
}

function stylesTask(){
  return src(['src/css/*'])
  .pipe(dest('dist/css'))
}

exports.html = htmlTask;
exports.images = imagesTask;
exports.styles = stylesTask;
exports.default = series(htmlTask, imagesTask, stylesTask);
