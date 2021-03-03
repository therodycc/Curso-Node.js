const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

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


module.exports = router;

