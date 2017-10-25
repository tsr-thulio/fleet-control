module.exports = function() {

  'ngInject';

  this.allVehicles = [ 
    {
      id: 0,
      combustivel : 'Flex',
      imagem : null,
      marca : 'Volkswagem',
      modelo : 'Gol',
      placa : 'FFF-5498',
      valor : '20000'
    },
    {
      id: 1,
      combustivel : 'Gasolina',
      imagem : null,
      marca : 'Volkswagem',
      modelo : 'Fox',
      placa : 'FOX-4125',
      valor : '20000'
    },
    {
      id: 2,
      combustivel : 'Alcool',
      imagem : 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      marca : 'Volkswagen',
      modelo : 'Fusca',
      placa : 'PAI-4121',
      valor : '20000'
    }
  ];

  this.idToBeUsed = 3;

  this.getFleetByPage = function(page) {
    return this.allVehicles;
  };

  this.addVehicle = function(vehicle) {
    vehicle.id = angular.copy(this.idToBeUsed);
    this.idToBeUsed += 1;
    this.allVehicles.push(vehicle);
  };

  this.removeVehicles = function(vehicles) {
    var excludedIds = vehicles.map(function(vehicle) {
      return vehicle.id;
    })
    var filteredList = this.allVehicles.filter(function(vehicle) {
      if (excludedIds.indexOf(vehicle.id) === -1) {
        return vehicle;
      }
    });

    this.allVehicles = filteredList;
  }
};
