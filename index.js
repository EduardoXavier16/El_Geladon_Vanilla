const express = require ('express');//Importa o express para a API!
const cors = require ('cors');//Importa o cors para a API!

const app = express(); //Dita ao app, que use o express como framework!
const port = 3002;//Define a porta padrão!

//Diz a API para se comunicar com o cliente através de arquivos JSON
app.use(express.json());
app.use(cors()); //Manda a API usar o CORS!

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Picolé de açaí com recheio de leite condensado.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Picolé de banana com recheio de nutela.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Picolé com recheio do mais gostoso cholate belga.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Limao',
    descricao:
      'Picolé de açaí com recheio de leite condensado.',
    foto: './assets/images/limao.png',
    preco: 8.0,
  },
  {
    id: 5,
    sabor: 'Milho verde',
    descricao:
      'Picolé sabor milho verde.',
    foto: './assets/images/milho-verde.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Uva',
    descricao:
      'Picolé sabor uva.',
    foto: './assets/images/uva.png',
    preco: 5.0,
  },
  {
    id: 7,
    sabor: 'Uva',
    descricao:
      'Picolé sabor morango.',
    foto: './assets/images/morango.png',
    preco: 12.0,
  },
];


app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/paleta/:id', (req, res) => {
  const parametroId = req.params.id;
  const escolhaPaleta = paletas.find((paleta) => paleta.id == parametroId);
  res.send(escolhaPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
