(function(){
	'use strict';
	
	angular
	.module('app', [
	])
	.service('GitHub',function($http){
		
		this.getReposotorios = function(success,error){
			$http.get('https://api.github.com/users/facundofernandez/repos').success(success).error(error);
		};

	})

	.controller('Repositorio',function($scope,GitHub){
		
		// Propiedades
		$scope.dataRepositorios = [];
	
		// Llamado a Servicios
		GitHub.getReposotorios(function(data){ $scope.dataRepositorios = data; });

		
		// Metodos		
		
		
		
	});
	
})();

