const paletasServices = require('../services/paletasServices');

const todasPaletasControllers = (req, res) => {
  const todasPaletas = paletasServices.todasPaletasServices();
  res.send(todasPaletas);
};

const todasPaletasByIdControllers = (req, res) => {
  const idParam = req.params.id;
  const escolhaPaleta = paletasServices.todasPaletasByIdServices(idParam);
  res.send(escolhaPaleta);
};

module.exports = {
    todasPaletasControllers,
    todasPaletasByIdControllers, 
}
