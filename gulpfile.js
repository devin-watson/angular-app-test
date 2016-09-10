var gulp = require("gulp"),
	connect = require("gulp-connect"),
	gutil = require("gulp-util"),
	compass = require("gulp-compass");

var sassSrc,
	sassStyle;

sassStyle = "expanded";

sassSrc = ["sass/style.scss"];

gulp.task("compass", function() {
  "use strict";
  gulp.src(sassSrc)
    .pipe(compass({
      sass: "sass",
      css: "css",
      style: sassStyle,
      sourcemap: true    
    })
    .on("error", gutil.log))
//    .pipe(gulp.dest( outputDir + 'css'))
    .pipe(connect.reload());
});


gulp.task("watch", function(){
	"use strict";
  	gulp.watch(["sass/*.scss", "sass/*/*.scss"], ["compass"]);
});

gulp.task("connect", function(){
	"use strict";
	connect.server({
		livereload: true
	})
});

gulp.task("default", ["connect", "compass", "watch"]);