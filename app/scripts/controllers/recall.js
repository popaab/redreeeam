'use strict';

/**
 * @ngdoc function
 * @name redreamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redreamApp
 */
angular.module('redreamApp')
  .controller('RecallCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.step = 1;
   	$scope.items = '';
   	$scope.name = '';

    var test = function(arr)
    {
    	var newTags = [];

        for (var i = 0; i < arr.length; i++) 
        {
            var value = arr[i].text;
            newTags.push(value);
        }

        console.log(newTags);
      	return newTags;
    };

   	$scope.tags = []; 

   	$scope.test = function(arr)
   	{
   		$scope.newTags = [];

   		for (var i = 0; i < arr.length; i++) 
   		{
          var value = arr[i].text;
          $scope.newTags.push(value);
        }

        console.log($scope.newTags);
        return $scope.newTags;
   	};

	$scope.theme = '';

	var initCallback = function()
	{
	    getItems();
	};

	var dataStore = new IDBStore('todos', initCallback);

	var getItemsSuccess = function(data)
	{
	   	$scope.items = data;
	   	console.log(data);
	    $scope.$apply(); 
	};
 
	var errorCallback = function()
	{
	    console.log('error'); 
	};
 
    var getItems = function(){
        dataStore.getAll(getItemsSuccess,errorCallback);
        console.log(getItemsSuccess); 

    };
 
    $scope.deleteItem = function(item)
    {
      dataStore.remove(item,getItems,errorCallback);
    }
 
    $scope.addItem = function()
    {
        $scope.itemname = $scope.name;
        $scope.itemtheme = $scope.theme;
        $scope.itemsymbols = test($scope.tags);
        console.log($scope.itemsymbols + $scope.itemname + $scope.itemthem );
        dataStore.put({'timeStamp': new Date().getTime(), 'name' : $scope.itemname, 'theme' : $scope.itemtheme, 'symbols': $scope.itemsymbols},getItems,errorCallback); 
    };

    $scope.getSymbols = function(arr)
    {
    	for (var i = 0; i < arr.length; i++) 
    	{
    		var value = arr[i];
    		console.log(value); 
    	}
    };


    //script for input title
        (function() {
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                // in case the input is already filled..
                if( inputEl.value.trim() !== '' ) {
                    classie.add( inputEl.parentNode, 'input--filled' );
                }

                // events:
                inputEl.addEventListener( 'focus', onInputFocus );
                inputEl.addEventListener( 'blur', onInputBlur );
            } );

            function onInputFocus( ev ) {
                classie.add( ev.target.parentNode, 'input--filled' );
            }

            function onInputBlur( ev ) {
                if( ev.target.value.trim() === '' ) {
                    classie.remove( ev.target.parentNode, 'input--filled' );
                }
            }
        })();

    // For Demo purposes only (show hover effect on mobile devices)
    [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
        el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
    } );

    // For Demo purposes only (show hover effect on mobile devices)
    [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
        el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
    } );

  });
