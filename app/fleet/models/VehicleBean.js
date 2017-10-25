module.exports = function () {

  'ngInject';

  var vehicle = function (params) {
    this.combustivel = null;
    this.imagem = null;
    this.marca = null;
    this.modelo = null;
    this.placa = null;
    this.valor = null;

    if (params) {
      this.combustivel = params.combustivel;
      this.imagem = params.imagem;
      this.marca = params.marca;
      this.modelo = params.modelo;
      this.placa = params.placa;
      this.valor = params.valor;
    }
  }

  vehicle.prototype = {

    /**
     * Validate mandatory fields
     * @return {Boolean} - status of validation
     */
    validate: function () {
      return this.placa && this.marca && this.modelo;
    }
  }

  return vehicle;
}
