const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/auth/login.js', 'public/js/auth')
    .js('resources/js/auth/resetPassword.js', 'public/js/auth')
    .js('resources/js/auth/forgetPassword.js', 'public/js/auth')

.sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/backend.js', 'public/js')
    .js('resources/js/agencies/index.js', 'public/js/agencies')
    .js('resources/js/agencies/create.js', 'public/js/agencies')
    .js('resources/js/agencies/edit.js', 'public/js/agencies')

.js('resources/js/borrowers/index.js', 'public/js/borrowers')
    .js('resources/js/borrowers/create.js', 'public/js/borrowers')
    .js('resources/js/borrowers/edit.js', 'public/js/borrowers')

.js('resources/js/users/create.js', 'public/js/users')
    .js('resources/js/users/edit.js', 'public/js/users')

.js('resources/js/donors/index.js', 'public/js/donors')
    .js('resources/js/donors/create.js', 'public/js/donors')
    .js('resources/js/donors/edit.js', 'public/js/donors')

.js('resources/js/books/index.js', 'public/js/books')
    .js('resources/js/books/create.js', 'public/js/books')
    .js('resources/js/books/edit.js', 'public/js/books')

.js('resources/js/circulation/index.js', 'public/js/circulation')
    .js('resources/js/circulation/borrow.js', 'public/js/circulation')
    .js('resources/js/circulation/unreturns/index.js', 'public/js/circulation/unreturns')

.js('resources/js/loginLogs/index.js', 'public/js/loginLogs')

.js('resources/js/announcements/index.js', 'public/js/announcements')
    .js('resources/js/announcements/create.js', 'public/js/announcements')
    .js('resources/js/announcements/edit.js', 'public/js/announcements')

.js('resources/js/borrowLogs/index.js', 'public/js/borrowLogs')

.js('resources/js/recommendation/edit.js', 'public/js/recommendation')

.js('resources/js/activities/create.js', 'public/js/activities')
    .js('resources/js/activities/index.js', 'public/js/activities')
    .js('resources/js/activities/edit.js', 'public/js/activities')

.js('resources/js/information/edit.js', 'public/js/information')
    .js('resources/js/chart/index.js', 'public/js/chart')

.sass('resources/sass/backend/backend.scss', 'public/css');