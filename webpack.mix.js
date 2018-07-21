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

mix.styles([
    'resources/assets/Admin/bootstrap/css/bootstrap.min.css',
    'resources/assets/Admin/font-awesome/4.5.0/css/font-awesome.min.css',
    'resources/assets/Admin/ionicons/2.0.1/css/ionicons.min.css',
    'resources/assets/Admin/plugins/iCheck/minimal/_all.css',
    'resources/assets/Admin/plugins/datepicker/datepicker3.css',
    'resources/assets/Admin/plugins/select2/select2.min.css',
    'resources/assets/Admin/plugins/datatables/dataTables.bootstrap.css',
    'resources/assets/Admin/dist/css/AdminLTE.min.css',
    'resources/assets/Admin/dist/css/skins/_all-skins.min.css'
], 'public/css/Admin.css');

mix.scripts([
    'resources/assets/Admin/plugins/jQuery/jquery-2.2.3.min.js',
    'resources/assets/Admin/bootstrap/js/bootstrap.min.js',
    'resources/assets/Admin/plugins/select2/select2.full.min.js',
    'resources/assets/Admin/plugins/datepicker/bootstrap-datepicker.js',
    'resources/assets/Admin/plugins/datatables/jquery.dataTables.min.js',
    'resources/assets/Admin/plugins/datatables/dataTables.bootstrap.min.js',
    'resources/assets/Admin/plugins/slimScroll/jquery.slimscroll.min.js',
    'resources/assets/Admin/plugins/fastclick/fastclick.js',
    'resources/assets/Admin/plugins/iCheck/icheck.min.js',
    'resources/assets/Admin/dist/js/app.min.js',
    'resources/assets/Admin/dist/js/demo.js',
    'resources/assets/Admin/dist/js/scripts.js'
], 'public/js/Admin.js');

mix.copy('resources/assets/Admin/bootstrap/fonts', 'public/fonts');
mix.copy('resources/assets/Admin/dist/fonts', 'public/fonts');
mix.copy('resources/assets/Admin/dist/img', 'public/img');
mix.copy('resources/assets/Admin/plugins/iCheck/minimal/blue.png', 'public/css');
