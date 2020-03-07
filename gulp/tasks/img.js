
'use strict';

module.exports = function() {
  $.gulp.task('img:dev', function() {
    return $.gulp.src($.config.src +'/img/**/*.{png,jpg,gif,svg}', { since: $.gulp.lastRun('img:dev') })
      .pipe($.gulp.dest($.config.build +'/assets/img'));
  });


  $.gulp.task('img:build', function() {
    return $.gulp.src($.config.src +'/img/**/*.{png,jpg,gif,svg}', { since: $.gulp.lastRun('img:build') })
      .pipe($.gulp.dest($.config.build +'/assets/img'));
  });


};
