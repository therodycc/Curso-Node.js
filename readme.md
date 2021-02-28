# Que es node.js 

Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.

* Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, sino en el servidor.
* Está basado en el motor V8 de Google.
* Permite hacer aplicaciones que se ejecutan en el servidor.

# Instalación

vamos a la pagina de node e instalamos la version mas actualizada
> [Link de descarga de node.js](https://nodejs.org/es/)

### Verificación de la instalación

luego verificamos si ya lo tenemos instalado probando el comando 
> node -v

# Ejecutar codigo en node 

Para la ejecutar nuestro codigo usamos el comando
> node app.js


O podemos omitir el js y dejar solo 
> node app

# Exportando modulos 

Para exportar nuestro modulos lo hacemos de la siguiente forma

```javascript
const comidass = ['Espaguetis', 'Arroz con habichuela', 'Pollo horneado'];
const Asperitivos = ['Helado', 'Pizza', 'Algodon de azucar'];


module.exports = {
    comidas: comidass,
    Asperitivos:Asperitivos
}
```

Si fuera una sola variable que fuesemos a exportar lo hacemos de esta forma

```javascript
const comidass = ['Espaguetis', 'Arroz con habichuela', 'Pollo horneado'];

module.exports = comidass;

```

# Require (Llamando las variables desde otro archivo)

```javascript
const comidas = require('./comidas.js');


console.log('Todas las comidas');
comidas.forEach(item =>{
    console.log(item);
})
```

```javascript
const { comidas, asperitivos } = require("./comidas.js");

console.log('Todas las comidas');
comidas.forEach(item =>{
    console.log(item);
})

console.log('Todos los asperitivos');
asperitivos.foreach(item2 => {
    console.log(item2);
})
```

# Agregando nuestro paquete JSON

Esto tiene la informacion de nuestro proyecto y la configuracion del mismo y lo obtenemos ejecutando el comando 
> npm init -y

donde en este archivo almacenamos los nombres y versiones de todos los paquetes instalados.
```json
{
  "name": "Fundamentos",
  "version": "1.0.0",
  "description": "",
  "main": "Comidas.js",
  "scripts": {
    "start": "node Express",
    "dev": "nodemon Express"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
    "mongoose": "^5.11.18"
  }
}
```

Uso de cada una de estas variables

* name 
    
    * Es el nombre de la carpeta principal donde tenemos guardado nuestro proyecto
* version
    
    * 

* descripcion 

    * 
* main 

    * 
* scripts 

    *  Aqui asignamos los codigos que ejecutan nuestro entorno de node para que cuando subamos nuestra web a un hosting este lo ejecute y podamos visualizar la pagina

* keywords 

    * 
* author 

    * 
* license 

    * 
* mongoose 

    * 


# Instalando npm (node_modules)
> npm install

instalará todo lo que necesita el proyecto, en la node_modulescarpeta, y lo creará si aún no existe.

Estas dependencias son como librerias que nos ayudana realizar cosas con mas facilidad cosas que son muy usadas  y ya estan configuradas para que no tengamos que volver a hacerla 

**la forma que usamos para instalar alguna dependencia es usando el siguiente comando**

> npm install nombre_de_la_dependencia

# Servidor HTTP

``` javascript
const http = require("http");

const puerto =process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js");
});


server.listen(puerto, () => {
  console.log("Escuchando...");
});

```

Primero lo que hacemos es importar nuestro modulo de http que no tenemos que instalarlo porque este ya viene con la instalacción de node

* creamos lo que es nuestro puerto

> donde el **process.env.PORT** busca el puerto que nos da nuestro hosting y el **3000** es para el puerto de abrirlo en el localhost

 >  **localhost:3000** 

luego creamos un servidor guardandolo en una constante server con el comando **http.createserver()** y le pasamos como parametros una respuesta y una peticion 


# Instalacion de nodemon 

Este es como si fuera un live server que te va actualiando el localhost automaticamente sin que tengas que volver a ejecutar en comando **node app.js**

>npm install -g nodemon 
 
 lo instalamos de forma global en nuestra pc con este comando 

 y comenzamos a ejecutar nuestro servidor con el comando 
 >  **nodemon app.js**







