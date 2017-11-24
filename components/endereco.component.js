function EnderecoController($scope, enderecoService) {
    var ctrl = this;

    ctrl.buscarCEP = function(cep) {
        enderecoService.buscarCEP(cep)
            .then(function(success){
                console.log(success);
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