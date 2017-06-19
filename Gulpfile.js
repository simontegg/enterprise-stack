const gulp = require('gulp');
const less = require('gulp-less')
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css')

// css
const postcss = require('gulp-postcss');

// HACK
const concat = require('gulp-concat')
const inject = require('gulp-inject-string')

// ENV
const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

// GLOBAL CSS
const paths = {
  css: [
    'semantic/dist/components/site.css', 
    'semantic/dist/components/reset.css', 
    //'semantic/dist/components/grid.css',
    'semantic/dist/components/card.css',
    'semantic/dist/components/container.css',
    'semantic/dist/components/segment.css'
    ]
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

  // const header = 'module.exports = \`'
//   const header = `// Automatically created 
// // until next.js gets CSS support
// // https://github.com/zeit/next.js/issues/544

// const css = \``

  const header = `module.exports = \``

  const footer = `\``
//   const footer = `\`
    
// const Styles = <style>{css}</style>
// export default Styles`

  return gulp.src(paths.css)
    .pipe(plumber())
    // .pipe(postcss(plugins))
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(concat('Styles.js'))
    .pipe(inject.prepend(header))
    .pipe(inject.append(footer))
    .pipe(gulp.dest('components'));
});

gulp.task('dev', () => {
  gulp.watch([paths.less], ['css']);
})
