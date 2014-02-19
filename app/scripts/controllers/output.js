'use strict';

angular.module( 'verbalregexApp' )
  .controller( 'OutputCtrl', function( $scope ) {
    $scope.selectedPatterns = [ ];
    $scope.patternsAdded = function( ) {
      return $scope.selectedPatterns.length !== 0;
    };
  } );
