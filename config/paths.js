module.exports = {
  bower : './src/lib/',
  scripts: ['src/lib/d3/d3.js', 'src/lib/c3/c3.js', 'src/scripts/**/*.js'],
  stylus: ['src/styles/main.styl'],
  watchStylus: ['src/styles/**/*.styl'],
  css: ['src/styles/**/*.css'],
  src: {
    fonts: './src/fonts/*',
    images: './src/images/**/*',
    lib: ['src/lib/d3/d3.js', 'src/lib/c3/c3.js'],
    scripts: ['./src/scripts/**/*.js', '!./src/scripts/**/*.spec.js'],
    stylus: './src/styles/main.syl',
    css: './src/styles/**/*.css',
    stylesPath: ['./src/styles/**/*.styl', './src/styles/**/*.css']
  },
  dist: {
    root: './dist',
    scripts: ['./dist/*.js','!./dist/*.min.js'],
    minScripts: ['./dist/*.min.js'],
    styles: ['./dist/oxford.css','./dist/main.css'],
    minStyles: ['./dist/oxford.min.css','./dist/main.min.css']
  },
  demo: {
    root: './demo',
    index: './demo/index.html',
    scripts: './demo/**/*.js'
  },
  server: {
    host: 'http://localhost:9000',
  }
  // html: ['src/']
}