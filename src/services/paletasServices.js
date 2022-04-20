const {todasPaletasControllers,todasPaletasByIdControllers,} = require('../controllers/paletasControllers');

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao: 'Picolé de açaí com recheio de leite condensado.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Picolé de banana com recheio de nutela.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Picolé com recheio do mais gostoso cholate belga.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Limao',
    descricao: 'Picolé de açaí com recheio de leite condensado.',
    foto: './assets/images/limao.png',
    preco: 8.0,
  },
  {
    id: 5,
    sabor: 'Milho verde',
    descricao: 'Picolé sabor milho verde.',
    foto: './assets/images/milho-verde.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Uva',
    descricao: 'Picolé sabor uva.',
    foto: './assets/images/uva.png',
    preco: 5.0,
  },
  {
    id: 7,
    sabor: 'Uva',
    descricao: 'Picolé sabor morango.',
    foto: './assets/images/morango.png',
    preco: 12.0,
  },
];

const todasPaletasServices = () => {
  return paletas;
};

const todasPaletasByIdServices = (id) => {
    paletas.find(paletas) = paletas.id = id
}

module.exports = {
    todasPaletasServices,
    todasPaletasByIdServices,
}
