'use strict';

angular.module( 'verbalregexApp' )
  .controller( 'MainCtrl', function( $scope ) {
    $scope.menuItems = [ 'Home', 'About', 'Contact' ];
    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];
  } );
