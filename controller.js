var ctrl = angular.module("ctrl", []);

ctrl.controller('meuController', ['$scope', '$timeout', '$document', function($scope, $timeout, $document){
			$scope.palavras_faltando_n = 10;
			$scope.palavras_faltando = [];
			$scope.palavras_usuario = [];
			$scope.letra = $document[0].querySelector('#letra').value;

			$scope._quebra_linha = [];
			$scope.letra_linhas = $scope.letra.split('\n');
			$scope.letra_palavras = $scope.letra_linhas.join(' ').split(' ');



			$scope.get_palavra = function(n){
				return ($scope.palavras_faltando.indexOf(n) == -1 ? $scope.letra_palavras[n] : '');
			}

			$scope.sortear_palavras = function(){
				$scope.palavras_faltando = [];
				while($scope.palavras_faltando.length < $scope.palavras_faltando_n){
					var n = parseInt(Math.random() * $scope.letra_palavras.length);
					if($scope.palavras_faltando.indexOf(n) == -1){
						$scope.palavras_faltando.push(n);
						$scope.palavras_usuario.push('');
					}
				}
			}

			$scope.quebrar_linhas = function(){
				$scope._quebra_linha = [];
				var total_palavras = 0;
					for(var n = 0; n < $scope.letra_linhas.length; n++){
						total_palavras += $scope.letra_linhas[n].split(' ').length;
						$scope._quebra_linha.push(total_palavras - 1);
					}
				}

			$scope.quebra_linha = function(n){
				return $scope._quebra_linha.indexOf(n) != -1;
			}

			$scope.acertou = function(n){
				return $scope.letra_palavras[n].toLowerCase() == $scope.palavras_usuario[$scope.palavras_faltando.indexOf(n)].toLowerCase();
			}

            //$timeout(function(){

            	//console.log($scope.letra);

					$scope.sortear_palavras();
					$scope.quebrar_linhas();

            //}, 500);
		}]);