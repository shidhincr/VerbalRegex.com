'use strict';

angular.module( 'verbalregexApp' )
  .controller( 'SearchpatternsCtrl', function( $scope ) {
    $scope.patterns = [
      'May be',
      'Should Start With',
      'Nothing But',
      'Space',
      'Words',
      'Digits'
    ];
  } );
