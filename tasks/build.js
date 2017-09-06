import gulp from 'gulp'
import gulpSequence from 'gulp-sequence' // 处理编译的先后顺序

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
