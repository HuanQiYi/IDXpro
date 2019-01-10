
const gulp = require('gulp');
const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglifyJS = require("gulp-uglify");
const connect = require("gulp-connect");

gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

/*gulp.task("copy-htmls",function(){
	return gulp.src(["*.html","!index.html"])
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})*/

gulp.task("images",function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("index-scss",function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("reset-scss",function(){
	return gulp.src("stylesheet/reset.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("reset.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("all-scss",function(){
	return gulp.src("stylesheet/all.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("all.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("details-scss",function(){
	return gulp.src("stylesheet/details.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("details.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("js",function(){
	return gulp.src(["*.js","!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("data",function(){
	return gulp.src(["*.json","!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

gulp.task("iconfont",function(){
	return gulp.src("iconfont/**/*")
	.pipe(gulp.dest("dist/iconfont"))
	.pipe(connect.reload());
})

gulp.task("build",["copy-html",/*"copy-htmls",*/"images","index-scss","reset-scss","all-scss","details-scss","js","data","iconfont"])

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	// gulp.watch(["*.html","!index.html"],["copy-htmls"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("stylesheet/index.scss",["index-scss"]);
	gulp.watch("stylesheet/all.scss",["all-scss"]);
	gulp.watch("stylesheet/details.scss",["details-scss"]);
	gulp.watch(["*.js","!gulpfile.js"],["js"]);
	gulp.watch(["*.json","!package.json"],["data"])
	gulp.watch("iconfont/**/*",["iconfont"])
})

gulp.task("connect",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("default",["watch","connect"])