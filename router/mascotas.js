const express = require('express');
const router = express.Router();

const MascotaModel = require('../models/mascota');

router.get('/', async(req, res) =>{

    try {
        const ArrayMascotasDB = await MascotaModel.find();
        console.log(ArrayMascotasDB);
        res.render('mascotas', {
            arraymascotas: ArrayMascotasDB
    /*             {id:'1', nombre:'rex',descripcion:' rex descripcion' },
                {id:'2', nombre:'rambo',descripcion:' rambo descripcion' },
                {id:'3', nombre:'hax',descripcion:' hax descripcion' }, */
            
        })

    } catch (error) {
        console.log(error);
    }



})


module.exports = router;

