
// 给gulp编写任务

// (1) 编译scss 
	
	const scss = require('gulp-sass');
	
	gulp.task('scss',function(){
		return gulp.src('../css/index.scss');
		.pipe(scss());
		.pipe(gulp.dest('../css/index.css'));
	})
	
	
	
	
// 监听

	gulp.task('watch',function(){
		gulp.watch('../css/index.scss',['scss']);
	})