import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named' // 重命名
import livereload from 'gulp-livereload' // 热更新
import plumber from 'gulp-plumber' // 文件信息流
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import {log, colors} from 'gulp-util'
import args from './util/args'

gulp.task('scripts',()=>{
  return gulp.src('app/js/index.js')
  .pipe(plumber({ // 改变错误默认处理机制
    errorHandle: function() {

    }
  }))
  .pipe(named())
  .pipe(gulpWebpack({
    module:{
      loaders:[{
        test:/\.js$/,
        loader:'babel-loader'
      }]
    }
  }),null,(err,stats)=>{
    log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
      chunks:false
    }))
  })
  .pipe(gulp.dest('server/public/js')) //最终输出路径
  .pipe(rename({
    basename:'cp',
    extname:'.min.js'
  }))
  .pipe(uglify({
    compress:{
      properties: false
    },
    output:{
      'quote_keys': true
    }
  }))
  .pipe(gulp.dest('server/public/js'))// 最终由两个文件：一个是未压缩的index.js,一个是压缩的cp.min.js
  .pipe(gulpif(args.watch,livereload()))
})
