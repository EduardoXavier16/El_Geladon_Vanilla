const express = require ('express');//Importa o express para a API!
const cors = require ('cors');//Importa o cors para a API!
const router = require ('./src/routes/paletasRoutes');

const app = express(); //Dita ao app, que use o express como framework!
const port = 3002;//Define a porta padrão! 

//Diz a API para se comunicar com o cliente através de arquivos JSON
app.use(express.json());
app.use(cors()); //Manda a API usar o CORS!
app.use('/paletas', router); //config de arquivo externo para paletas

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
