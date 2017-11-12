let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 if (!mix.inProduction()) {
     mix.webpackConfig({devtool: 'source-map'})
 }
mix.js('./src/Hello.js', './output/bundle.js');
