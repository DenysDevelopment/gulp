import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import size from 'gulp-size';

export const plugins = {
	replace,
	plumber,
	notify,
	browsersync,
	newer,
	size,
	if: ifPlugin,
};
