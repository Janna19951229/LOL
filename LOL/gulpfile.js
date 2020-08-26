
// 给gulp编写任务
	const gulp = require('gulp');

// (1) 拷贝html
	const htmlmin = require('gulp-htmlmin');
		
	gulp.task('copy-html',function(){
		// gulp的原路径
		return gulp.src('index.html')
		// 压缩html
		.pipe(htmlmin({
			collapseWhitespace:true,
			removeEmptyAttibutes: true,
			})
			)
		// 目的路径
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
	})
	
	gulp.task('copy-pages',function(){
		// gulp的原路径
		return gulp.src('pages/*.html')
		// 压缩html
		.pipe(htmlmin({
			collapseWhitespace:true,
			removeEmptyAttibutes: true,
			})
			)
		// 目的路径
		.pipe(gulp.dest('dist/pages'))
		.pipe(connect.reload());
	})
	
// (2) 编译scss 

	const scss = require('gulp-sass');
	const minifycss = require('gulp-minify-css');
	const rename = require('gulp-rename');
	
	gulp.task('scss',function(){
		return gulp
		.src('css/index.scss')
		.pipe(scss())
		// .pipe(gulp.dest('dist/css'))
		.pipe(minifycss())
		.pipe(rename('index.min.css'))  // 每一个scss文件，都要重新编写一个文件命名
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
	});
	// 购物首页界面css
	gulp.task('shopsIndexcss',function(){
		return gulp
		.src('css/shopindex.scss')
		.pipe(scss())
		// .pipe(gulp.dest('dist/css'))
		.pipe(minifycss())
		.pipe(rename('shopindexmin.css'))  // 每一个scss文件，都要重新编写一个文件命名
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
	});
		// 购物分页css
		gulp.task('Figurinecss',function(){
			return gulp
			.src('css/Figurine.scss')
			.pipe(scss())
			// .pipe(gulp.dest('dist/css'))
			.pipe(minifycss())
			.pipe(rename('Figurinemin.css'))  // 每一个scss文件，都要重新编写一个文件命名
			.pipe(gulp.dest('dist/css'))
			.pipe(connect.reload());
		});

		// 购物详情页
		gulp.task('details',function(){
			return gulp
			.src('css/details.scss')
			.pipe(scss())
			// .pipe(gulp.dest('dist/css'))
			.pipe(minifycss())
			.pipe(rename('detailsmin.css'))  // 每一个scss文件，都要重新编写一个文件命名
			.pipe(gulp.dest('dist/css'))
			.pipe(connect.reload());
		});

			// 购物车
			gulp.task('shopCar',function(){
				return gulp
				.src('css/shopCar.scss')
				.pipe(scss())
				// .pipe(gulp.dest('dist/css'))
				.pipe(minifycss())
				.pipe(rename('shopCarmin.css'))  // 每一个scss文件，都要重新编写一个文件命名
				.pipe(gulp.dest('dist/css'))
				.pipe(connect.reload());
			});

			// 注册
			gulp.task('register',function(){
				return gulp
				.src('css/register.css')
				// .pipe(scss())
				// .pipe(gulp.dest('dist/css'))
				.pipe(minifycss())
				.pipe(rename('registermin.css'))  // 每一个scss文件，都要重新编写一个文件命名
				.pipe(gulp.dest('dist/css'))
				.pipe(connect.reload());
			});
// (3) 处理js
	gulp.task('scripts',function(){
		return gulp
		.src('js/*.js')		
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
	});
	
// (3) 处理图片
	gulp.task('images',function(){
		return gulp
		.src('images/**/*')
		.pipe(gulp.dest('dist/images'))
		.pipe(connect.reload());
	});

// (4) 处理数据
	gulp.task('data',function(){
		return gulp
		.src(['json/*.json','!package.json'])
		.pipe(gulp.dest('dist/data'))
		.pipe(connect.reload());
	})
	
	
// 监听

	gulp.task('watch',function(){
		gulp.watch('css/index.scss',['scss']);
		gulp.watch('index.html',['copy-html']);
		gulp.watch('pages/*.html',['copy-pages']);
		gulp.watch('images/**/*',['images']);
		gulp.watch('json/*.json',['data']);
		gulp.watch('js/*.js',['scripts']);
		gulp.watch('css/shopindex.scss',['shopsIndexcss']);
		gulp.watch('css/Figurine.scss',['Figurinecss']);
		gulp.watch('css/details.scss',['details']);
		gulp.watch('css/shopCar.scss',['shopCar']);
		gulp.watch('css/register.css',['register']);
	})
	
// 服务器
	const connect = require("gulp-connect");
	
	gulp.task("server", function(){
	  connect.server({
	    root: "dist",
	    port: 8888,
	    livereload: true //实时刷新
	  })
	});
	
// 设置一个默认任务
// 同时启动监听和服务器
	
	gulp.task("default", ["watch", "server"]);