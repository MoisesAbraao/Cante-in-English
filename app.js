var app = angular.module("MeuApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
	templateUrl : "templates/home.html",
	controller: "meuController"
	})
	.when("/bandas", {
	templateUrl : "templates/bandas.html",
	controller: "meuController"
	})
	.when("/beatles", {
	templateUrl : "templates/bandas/beatles.html",
	controller: "meuController"
	})
	.when("/scorpions", {
	templateUrl : "templates/bandas/scorpions.html",
	controller: "meuController"
	})
	.when("/pinkfloyd", {
	templateUrl : "templates/bandas/pinkfloyd.html",
	controller: "meuController"
	})
	.when("/roxette", {
	templateUrl : "templates/bandas/roxette.html",
	controller: "meuController"
	})
	.when("/queen", {
	templateUrl : "templates/bandas/queen.html",
	controller: "meuController"
	})

	//rotas da banda beatles
	.when("/heyjude", {
	templateUrl : "templates/bandas/beatles/heyjude.html",
	controller: "meuController"
	})
	.when("/letitbe", {
	templateUrl : "templates/bandas/beatles/letitbe.html",
	controller: "meuController"
	})
	.when("/yesterday", {
	templateUrl : "templates/bandas/beatles/yesterday.html",
	controller: "meuController"
	})
	.when("/blackbird", {
	templateUrl : "templates/bandas/beatles/blackbird.html",
	controller: "meuController"
	})
	.when("/twistandshout", {
	templateUrl : "templates/bandas/beatles/twistandshout.html",
	controller: "meuController"
	})

	//rotas da banda scorpions
	.when("/stilllovingyou", {
	templateUrl : "templates/bandas/scorpions/stilllovingyou.html",
	controller: "meuController"
	})
	.when("/windofchange", {
	templateUrl : "templates/bandas/scorpions/windofchange.html",
	controller: "meuController"
	})
	.when("/alwayssomewhere", {
	templateUrl : "templates/bandas/scorpions/alwayssomewhere.html",
	controller: "meuController"
	})
	.when("/sendmeanangel", {
	templateUrl : "templates/bandas/scorpions/sendmeanangel.html",
	controller: "meuController"
	})
	.when("/youandi", {
	templateUrl : "templates/bandas/scorpions/youandi.html",
	controller: "meuController"
	})

	//rotas da banda PinkFloyd
	.when("/wishyouwerehere", {
	templateUrl : "templates/bandas/pinkfloyd/wishyouwerehere.html",
	controller: "meuController"
	})
	.when("/comfortablynumb", {
	templateUrl : "templates/bandas/pinkfloyd/comfortablynumb.html",
	controller: "meuController"
	})
	.when("/heyyou", {
	templateUrl : "templates/bandas/pinkfloyd/heyyou.html",
	controller: "meuController"
	})
	.when("/anotherbrickinthewall", {
	templateUrl : "templates/bandas/pinkfloyd/anotherbrickinthewall.html",
	controller: "meuController"
	})

	//rotas da banda Roxette
	.when("/itmusthavebeenlove", {
	templateUrl : "templates/bandas/roxette/itmusthavebeenlove.html",
	controller: "meuController"
	})
	.when("/listentoyourheart", {
	templateUrl : "templates/bandas/roxette/listentoyourheart.html",
	controller: "meuController"
	})
	.when("/spendingmytime", {
	templateUrl : "templates/bandas/roxette/spendingmytime.html",
	controller: "meuController"
	})

	//rotas da banda Queen
	.when("/loveofmylife", {
	templateUrl : "templates/bandas/queen/loveofmylife.html",
	controller: "meuController"
	})
	.when("/wearethechampions", {
	templateUrl : "templates/bandas/queen/wearethechampions.html",
	controller: "meuController"
	})   
	.otherwise ({ redirectTo: '/' });
});

app.controller('meuController', ['$scope', '$timeout', '$document', function($scope, $timeout, $document){
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