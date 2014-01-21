'use strict';

angular.module( 'verbalregexApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
 ] )
  .config( function( $routeProvider ) {
    $routeProvider
      .when( '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      } )
      .when( '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      } )
      .when( '/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl'
      } )
      .otherwise( {
        redirectTo: '/'
      } );
  } );
