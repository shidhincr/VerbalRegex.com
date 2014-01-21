'use strict';

angular.module( 'verbalregexApp' )
  .controller( 'HeaderCtrl', function( $scope, $location ) {
    $scope.menuItems = [ 'Home', 'About', 'Contribute' ];
    $scope.currentPage = function( item ) {
      var page = ( item || '' ).toLowerCase( ),
        hash = $location.path( );
      return !!hash.match( page ) || (hash === '/'&&page==='home');
    };
    $scope.getUrl = function( item ) {
      return ( item || '' ).toLowerCase( );
    };
  } );
