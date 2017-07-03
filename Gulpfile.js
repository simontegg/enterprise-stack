const gulp = require('gulp')
const less = require('gulp-less')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')

// css
const postcss = require('gulp-postcss')

// HACK
const concat = require('gulp-concat')
const inject = require('gulp-inject-string')

// ENV
const env = process.env.NODE_ENV || 'development'
const prod = env === 'production'

// GLOBAL CSS
const paths = {
  css: [
    './node_modules/normalize.css/normalize.css',
    './styles/site.css', 
    './styles/styles.css' 
    ],
  styles: 'styles'
}

gulp.task('css', () => {
  let plugins = [
    require('precss')({}), // eslint-disable-line
    require('autoprefixer')({}), // eslint-disable-line
  ]

  if (prod) {
    plugins = [
      require('cssnano'), // eslint-disable-line
    ].concat(plugins);
  }

  const header = `module.exports = \``
  const footer = `\``

  return gulp.src(paths.css)
    .pipe(plumber())
    // .pipe(postcss(plugins))
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(concat('global-styles.js'))
    .pipe(inject.prepend(header))
    .pipe(inject.append(footer))
    .pipe(gulp.dest(paths.styles));
});

gulp.task('dev', () => {
  gulp.watch([paths.css], ['css']);
})
