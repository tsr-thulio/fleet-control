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
      valor : 20000
    },
    {
      id: 1,
      combustivel : 'Gasolina',
      imagem : null,
      marca : 'Volkswagem',
      modelo : 'Fox',
      placa : 'FOX-4125',
      valor : 20000
    },
    {
      id: 2,
      combustivel : 'Alcool',
      imagem : 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      marca : 'Volkswagen',
      modelo : 'Fusca',
      placa : 'PAI-4121',
      valor : 20000
    }
  ];

  this.idToBeUsed = 3;

  this.getFleetByPage = function(page) {
    var indexStart = 5 * (page - 1);
    var indexEnd = indexStart + 5;
    return this.allVehicles.slice(indexStart, indexEnd);
  };

  this.upsertVehicle = function(vehicle) {
    if (vehicle.id !== null && vehicle.id !== undefined) {
      update(vehicle, this);
    } else {
      save(vehicle, this);
    }
  }

  update = function(vehicle, scope) {
    scope.allVehicles = scope.allVehicles.map(function(item) {
      if (item.id === vehicle.id) {
        item = vehicle;
      }
      return item;
    })
  }

  save = function(vehicle, scope) {
    vehicle.id = angular.copy(scope.idToBeUsed);
    scope.idToBeUsed += 1;
    scope.allVehicles.push(vehicle);
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

  this.searchVehicles = function(searchText) {
    searchText = searchText.toLowerCase();
    var filteredResults = this.allVehicles.filter(function(item) {
      if ( (item.combustivel !== null && item.combustivel.toLowerCase().indexOf(searchText) != -1) 
            || item.marca.toLowerCase().indexOf(searchText) != -1) {
        return item;
      }
    });

    return filteredResults;
  }

  this.getTotalItems = function() {
    return this.allVehicles.length;
  }

  this.getVehicleById = function(vehicleId) {
    var vehicle =  this.allVehicles.find(function(vehicle) {
      return vehicle.id === vehicleId;
    });
    return vehicle;
  }

  this.getFuelList = function() {
    return ['Gasolina', 'Alcool', 'Flex', 'Diesel', 'Eletrico'];
  };
};
