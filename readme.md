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

    > Con el comando npm run nombre_varible 

    Con esto ejecutamos cualquiera de los scripts que creemos 

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


algo que debemos de hacer es introducir el nombre de esta carpeta en un **.gitignore**  para que cuando subamos nuestra pagina a un hosting no se nos suban estos archivos
* Ya que estos se instalan cuando subimos nuestra pagina a heroku
# Servidor HTTP

``` javascript
const http = require("http");

const puerto =process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js");
});
```

Primero lo que hacemos es importar nuestro modulo de http que no tenemos que instalarlo porque este ya viene con la instalacción de node

* creamos lo que es nuestro puerto

> donde el **process.env.PORT** busca el puerto que nos da nuestro hosting y el **3000** es para el puerto de abrirlo en el localhost

 >  **localhost:3000** 

luego creamos un servidor guardandolo en una constante server con el comando **http.createserver()** y le pasamos como parametros una respuesta y una peticion 

el servidor va a responder dependendiendo lo que nosotros le pidamos atraves de una url, y nos responderá con un index.html o index.ejs o cualquier otro archivo que nosotros le pasemos

**Es el intercambio de comunicación**

* **GET**
    
    * Nos hace nuestro intercambio de informacion es decir cuando visitamos nuestro sitio web hacemos una solicitud de tipo GET y el servidor nos responde con un index.html u otro archivo

* **POST** 

    *  


Y para que todo esto funcione debemos de pasarle el puerto atravez de la constante 

```javascript
server.listen(puerto, () => {
  console.log("Escuchando...");
});
```

> **_NOTA:_** Pero este fue sustituido por **express** un paquete que fue creado para hacer los servidores de forma mas facil.

# Instalacion de nodemon 
Esta herramienta se instala a través de npm y nos sirve para estar escuchando cambios en nuestra configuración de node.js y reinicia automáticamente el servidor.

Este es como si fuera un live server que te va actualiando el localhost automaticamente sin que tengas que volver a ejecutar en comando **node app.js**

>npm install -g nodemon 
 
 lo instalamos de forma global en nuestra pc con este comando 

 y comenzamos a ejecutar nuestro servidor con el comando 
 >  **nodemon app.js**

#  Express

 ## Instalación de Express
  
  Para su instalación lo unico que debemos de hacer es escribir en la consola 

  > npm i express 

## ¿Qué es Express?

 Nos va a permitir hacer nuestro servidor http de una manera muy sencilla y vamos a poder gestionar las respuestas o las solicitudes que hace el cliente algo fundamental de este es que podemos hacer nuestro sitio web dinamico 

  ```javascript
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
  ```

  Primero lo que hacemos es requerir este paquete que instalamos de express y lo almacenamos en una varible llamada app o como queramos.

  luego configuramos el puerto pasandole el puerto que puede ser pasado por el servidor en la nube y pasandole uno para nuestro localhost

  **Con el app.get le decimos lo que queremos que muestre con ese pedido del cliente** 
  Y con nuestro parametro res.send le respondemos con algo a dicho pedido

  Y le pasamos nuestro puerto al servidor con app.listen()

  ```javascript
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
  ```


Si agregamos otra respuesta a otra solicitud por nuestro cliente lo hacemos de la siguiente forma


**Por ejemplo**

```javascript
app.get("/services", (req, res) => {
  res.send("Estas en la pagina de services!");
});
```

si la persona solicita services le responderá con lo que nosotros pongamos dentro de nuestra respuesta

# Carpeta public 

En esta carpeta nos sirve para nosotros tener todos nuestros archivos css,imagenes, js, etc

**Le decimos a express que nosotros tenemos una carpeta public de la siguiente forma:**

```javascript 
app.use(express.static(__dirname + "/public"));
```

Y cuando llamamos a este static debemos de especificar la ruta de donde estará nuestra carpeta. 
> donde el _**__dirname**_ nos sirve para pasarle la ubicacion total de documento en nuestro disco duro

ya que si pasamos __dirname en un console.log(); nos muestra la ubicacion en nuestro disco

Y luego le pasamos la carpeta a la que queremos que acceda de nuestro proyecto la cual es public

donde aqui podemos trabajar proyectos tambien ya que si ponemos esta linea por encima de las rutas configuradas esta abrirá de primero si hay un index pues abrirá este de primero

**Pero aqui nosotros solo podemos tener archivos staticos y si queremos hacer nuestros archivos dinamicos, necesitamos crear una carpeta para las vistas y dejar la carpeta public para los css,imagenes, js, etc**

* Esto se llama **Middleware** porque estamos solicitando una funcion antes de que se llamen nuestras solicitudes

# Configurando pagina 404

Cuando el cliente solicite una pagina que no encuentra en nuestro servidor pues lanzará esta pagina creada por nosotros diciendole que no se encontró eso que solicitó, es decir, que no existe

```javascript
app.use((req, res, next) => {
  // res.status(404).send("Sorry cant find that!");
res.status(404).sendFile(__dirname + "/public/404.html");
});
```
es decir que cuanod el status sea el 404 responda con el archivo 404

> Algo que debemos de tomar muy en cuenta es que esta ruta del status 404 debemos siempre de ponerla debajo para que la muestre si no despues que haya revisado todos los documentos y vea que no esté ya que si la ponemos de primero aunque la ruta exista nos las va a llamar

## Trabajando con Ejs

pero como es con ejs debemos de cambiar el **sendfile** por el **render** 
* Pasandole el nombre del archivo
* Y luego lo que contendrá adentro 

De esta forma: 

```javascript
app.use((req, res, next) => {
    // res.status(404).sendFile(__dirname + "/public/404.html");
    res.status(404).render('404', {
        titulo404: '404',
        descripcion: 'No se encontró nada'
    });
})
```

# Vistas

En estas vamos a usar lo que es un motor de plantillas llamado EJS que nos ayuda a poder mesclar el codigo html con el codigo JS para poder hacer que nuestras pagina sea dinamica
> creamos nuestra carpeta **views** 

donde pondremos todos nuestros archivos Ejs

## Instalación de EJS

Primero que nada instalamos nuestro paquete de la siguiente forma 
> npm i ejs

## uso
luego en nuestro servidor agregamos la dirección a nuestras vistas 

```javascript
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
```

* Aqui le indicamos a Express que vamos a usar el paquete de plantillas ejs 
* y luego le decimos que las vistas estan en la carpeta views

> **Nota** es importate que pongamos este codigo de la lectura de las vista arriba 

# Renderizado de paginas

Debemos de cambiar el **res.send()** por **res. render()** para que este convierta nuestros archivos a html
* Y para llamarlo desde app.get()
    * como primer parametro le pasamos el nombre del documento sin su extension y despues de la coma le pasamos los datos

```javascript
app.get('/', (req, res) => {
    //res.send('Mi respuesta desde express');
    res.render('index', { titulo: 'mi titulo dinamico' });
});
```

* Y mostramos los datos en el html de la siguiente forma
    * Este tiene un parecido al lenguaje php pero en ves de signos de interrogación usamos 
    ```html
    
    <h1><%=titulo%></h1>
    
    ```

# Templates

Esto lo usamos para no tener que estar repitiendo elementos que vamos a estar usando constantemente
* Dentro de la carpeta de views creamos una carpeta llamada templates 

Donde estos van a tener los include
> Es decir que nosotros podemos cortar pedazos de html para incluirlos cada vez que lo necesitemos

```javascript
<%- include('template/cabecera', {tituloweb: 'Inicio EJS'}); %>
```
Con este codigo llamamos nuestro pedazo de codigo ya realizado Donde primero le pasamos la ubicacion del archivo y luego los parametros que queramos pasarles

> Y usamos el guion medio  ya que este va a decifrar algun codigo en html

# llamado de archivos de la carpeta public

Como ya hemos configurado la carpeta public solo necesitamos llamar la carpeta de css y el nombre del archivo
**Ejemplo**
```html
  <link rel="stylesheet" href="./css/estilos.css">
```

# Subiendo mi pagina a Heroku

lo primero que debemos de hacer es registrarnos en la pagina de heroku

> [heroku link page](https://dashboard.heroku.com/apps)


luego de crear nuestro proyecto tenemos que elegir entre las opciones que nos da heroku para subir nuestro proyecto 

>**Debemos de tener conocimientos en lo que es GIT**


* heroku git 
  
  * Si vamos a usar heroku git, tenemos que instalar heroku CLI [link de descarga heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) 
  * Despues de instalarlo lo mas recomendable es que reiniciemos nuestra pc

  * lo primero que debemos de hacer es un 
  ```
  heroku login
  git init
  heroku git:remote -a nombre-de-su-proyecto
  git add .
  git commit -am "make it better"
  git push heroku master

* github 

* Container registry


# Router Express

Esto sirve para nosotros ordenar todas nuestras rutas

 * lo primero que debemos de hacer es crear una carpeta llamada router 

 Creamos un archivo.js 
    
* Debemos importar lo que es nuestro require del router el cual está incluido en express

```javascript
    const express = require('express');
    const router = express.Router();

/*Antes*/--------------------------------------

app.get('/', (req, res) => {
    //res.send('Mi respuesta desde express');
    res.render('index', { titulo: 'mi titulo dinamico' });
});

/*Despues (Forma correcta)*/-------------------

router.get('/', (req, res) => {
    //res.send('Mi respuesta desde express');
    res.render('index', { titulo: 'mi titulo dinamico' });
});


``` 

* Luego debemos exportar la varible router 

```javascript
module.exports = router;
```

Y en nuestro archivo de app.js yo lo tengo llamado express.js aqui nosotros llamamos dicha ruta de la siguiente forma 

**Ejemplos**

```javascript
app.use('/', require('./router/Rutasweb'));

app.use('/mascotas', require('./router/mascotas'));
```

Para crear una nueva ruta a un nuevo archivo creamo nuestro archivo dentro de la ruta llamado mascotas.js o como le queramos llamar 
 * Creamos nuestra varible router 
```javascript
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) =>{

    try {
        const ArrayMascotasDB = await Mascota.find();
        console.log(ArrayMascotasDB);

    } catch (error) {
        console.log(error);
    }
    res.render('mascotas', {
        arraymascotas:[
            {id:'1', nombre:'rex',descripcion:' rex descripcion' },
            {id:'2', nombre:'rambo',descripcion:' rambo descripcion' },
            {id:'3', nombre:'hax',descripcion:' hax descripcion' },
        ]
    })
})
```

donde creamos nuestra ruta para mascotas donde despues en el res.render ponemos el nombre de nuestro archivo que el cliente verá y luego de estos las varibles que contendrá

* Y hacemos el llamado desde el **app**

```javascript
app.use('/mascotas', require('./router/mascotas'));
```


> Y las ventajas son que nosotros vamos a tener nuestras rutas mas organizadas ya que vamos a usar el post, get, delete, etc...

# Conexion a MongoDB

Esta tiene una opcion para tener nuestros datos en la nube 
* Le damos donde dice probar de forma gratuita

* Y nos registramos 

* Esta no la tenemos que subir a nuestro servidor ya que está en la nube y es accedida desde nuestro hosting ya que está en la nube

> Contruimos un cluster gratis

Luego debemos de instalar mongoosse que es una forma sencilla de establecer conexión con MongoDB.

> npm i mongoose








