import sprite from 'gulp-svg-sprite';

export const svgSprite = () => {
	return app.gulp
		.src(`${app.path.src.svgicons}`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SVG',
					message: '<% error.message %>',
				}),
			),
		)
		.pipe(
			sprite({
				mode: {
					stack: {
						sprite: '../icons.svg',
						example: app.isDev,
					},
				},
			}),
		)
		.pipe(app.plugins.size())
		.pipe(app.gulp.dest(`${app.path.build.images}`));
};
