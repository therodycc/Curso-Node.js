const express = require('express');
const app = express();

//conexion a base de datos
const mongoose = require('mongoose');

const user =  'therodycc';
const password = 'wu2Y71gfyz058mp9';
const BDname = 'Veet';
const uri = `mongodb+srv://${user}:${password}@cluster0.fqqxy.mongodb.net/${BDname}?retryWrites=true&w=majority`; 

mongoose.connect(uri, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log('Base de datos conectada'))
.catch(e => console.log(e))


/*motor de plantillas de vistas */
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


/*recordar que cuando nosotros subamos nuestra pagina a 
un hosting este nos proporcionará un numero de puerto*/
/* */
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

/*rutas web */
app.use('/', require('./router/Rutasweb'));
app.use('/mascotas', require('./router/mascotas'));


/*este archivo va a abrir cuando no encuentre ninguna ruta */
app.use((req, res, next) => {
    // res.status(404).sendFile(__dirname + "/public/404.html");
    res.status(404).render('404', {
        titulo404: '404',
        descripcion: 'No se encontró nada'
    });
})

app.listen(port, () => {
    console.log('Un servidor a su servicio en el puerto ', port);

})
