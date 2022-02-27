export const replace = () => {
	return src([app.path.src.files])
		.pipe(replace('@', 'foo'))
		.pipe(dest('build/'));
};
