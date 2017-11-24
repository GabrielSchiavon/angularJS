angular.module('enderecoModule')
    .service('enderecoService', function($http){
        this.buscarCEP = function(cep){
            return $http.get('http://45.33.100.20/services-api/public/busca-cep/' + cep);
        }
    })