import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-liveserver' // 执行服务器脚本，启动服务器
import args from './util/args'

gulp.tasks('server',(cb)=>{
  if(!args.watch) return cb()

  var server = liveserver.new(['--harmony','server/bin/www'])

  server.start()

  //ejs和js改变时浏览器自动刷新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file])
  })

  //接口数据，路由等需要服务重启的文件发生变化时，重启服务
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  })
})
