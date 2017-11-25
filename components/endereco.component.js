function EnderecoController($scope, enderecoService) {
    var ctrl = this;
    $scope.retorno;

    ctrl.buscarCEP = function(cep) {
        enderecoService.buscarCEP(cep)
            .then( function(response){
                $scope.retorno = response.data;
                if ($scope.retorno.resultado == 0) {
                    alert($scope.retorno.response);
                    $scope.retorno = null;
                }
            }, function(err){
                console.log(err);
            })
    }
}

angular.module('enderecoModule', [])
    .component('enderecoComponent', {
        templateUrl: 'components/endereco.html',
        bindings: {
            endereco: '='
        },
        controller: EnderecoController
    });