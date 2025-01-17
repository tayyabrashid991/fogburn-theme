/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.2/admin/angularjs/
*/

var colorAdminApp = angular.module('colorAdminApp', [
  'ui.router',
  'ui.bootstrap',
  'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'template/app.html',
      abstract: true
    })
    .state('app.home', {
      url: '/home',
      data: {
        pageTitle: 'Home Page'
      },
      templateUrl: 'views/index.html'
    })
    /*
      REFERENCE FOR JQUERY PLUGINS
      .state('app.dashboard.v1', {
        url: '/v1',
        templateUrl: 'views/index.html',
        data: { pageTitle: 'Dashboard v1' },
        resolve: {
          service: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              serie: true,
              files: [
                '../assets/plugins/jquery-jvectormap/jquery-jvectormap.css',
                '../assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                '../assets/plugins/gritter/css/jquery.gritter.css',
                '../assets/plugins/gritter/js/jquery.gritter.js',
                '../assets/plugins/flot/jquery.flot.min.js',
                '../assets/plugins/flot/jquery.flot.time.min.js',
                '../assets/plugins/flot/jquery.flot.resize.min.js',
                '../assets/plugins/flot/jquery.flot.pie.min.js',
                '../assets/plugins/sparkline/jquery.sparkline.js',
                '../assets/plugins/jquery-jvectormap/jquery-jvectormap.min.js',
                '../assets/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js',
                '../assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                '../assets/js/demo/dashboard.min.js'
              ] 
            });
          }]
        }
      })
    */
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function ($rootScope, $state, setting) {
  $rootScope.$state = $state;
  $rootScope.setting = setting;
}]);