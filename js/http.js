const http = require('http');
const server =http.createServer((req, res)=>{
    res.end('Estoy respondiendo a tu solicitud jajjajaja');
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log('Escuchando solicitudess');
})

/*tenemos que instalar un paquete llamado nodemo 
npm install -g nodemon 
la cual nos sirve como si fuera un live server en node
 */