const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('Mi respuesta desde express');
    res.render('index', { titulo: 'mi titulo dinamico' });
});

router.get('/services', (req, res) => {
    // res.send('estas en la pagina de servicios');
    res.render('services', { tituloservices: 'Page de servicios' });
})


module.exports = router;
