const { src, dest, watch } = require('gulp'),
 plumber = require('gulp-plumber'),
 imagemin = require('gulp-imagemin'),
 mozjpeg = require('imagemin-mozjpeg'),
 pngquant = require('imagemin-pngquant');

const taskImagemin = () =>
 src('images/*')
  .pipe(plumber())
  .pipe(imagemin([
   pngquant({
    quality: [ 0.65, 0.8 ], speed: 1
   }),
   mozjpeg({
    quality: 80
   }),
   imagemin.gifsicle({
    interlaced: false
   }),
   imagemin.svgo({
    plugins: [
     { removeViewBox: true },
     { cleanupIDs: false }
    ]
   }),
  ]))
  .pipe(dest('_min'));

// watch
const taskWatch = (done) => {
 watch('images/*', taskImagemin);
 done();
}

exports.default = taskImagemin;
exports.watch = taskWatch;