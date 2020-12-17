const express = require('express');
const app = express();
const router = express.Router();
const propietariosController = require('./controllers/propietariosController');
const unidadesController = require('./controllers/unidadesController');
const apartamentosController = require('./controllers/apartamentosController');
const body = require('body-parser');
const mongoose = require('mongoose');

app.use(body.urlencoded({
    extended: true
}));
app.use(body.json());

router.route('/propietarios')
    .get(propietariosController.obtenerpropietarios)
    .post(propietariosController.crearpropietario);

router.route('/propietarios/:id')
    .delete(propietariosController.elimnarpropietarios)
    .get(propietariosController.findpropietario)
    .put(propietariosController.updatepropietario);

router.route('/unidades')
    .get(unidadesController.obtenerUnidad)
    .post(unidadesController.crearUnidad);

router.route('/unidades/:id')
    .delete(unidadesController.elimnarUnidades)
    .get(unidadesController.findUnidad)
    .put(unidadesController.updateUnidad);

router.route('/apartamentos')
    .get(apartamentosController.obtenerApartamento)
    .post(apartamentosController.crearApartamento);

router.route('/apartamentos/:id')
    .delete(apartamentosController.elimnarApartamentos)
    .get(apartamentosController.findApartamento)
    .put(apartamentosController.updateApartamento);

app.use('/', router);

mongoose.connect('mongodb://127.0.0.1:27017/myBD', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true}, (err) => {
        if(err){
            console.log("Se presentó un error: "+err);
        };
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB conection error: '));

if(!db){
    console.log('Error during connecting with db');
}else{
    console.log('************** Connected successfully **************');
}

app.listen(3000, () => {
    console.log('Ya estoy escuchando');
});