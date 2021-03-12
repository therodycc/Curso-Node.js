const express = require('express');
const router = express.Router();

const MascotaModel = require('../models/mascota');

router.get('/', async(req, res) =>{

    try {
        const ArrayMascotasDB = await MascotaModel.find();
        res.render('mascotas', {

         arraymascotas:ArrayMascotasDB

            /*arraymascotas: [
            {id:'1', Nombre:'rex',Descripcion:' rex Descripcion' },
                {id:'2', Nombre:'rambo',Descripcion:' rambo Descripcion' },
                {id:'3', Nombre:'hax',Descripcion:' hax Descripcion' },]
             */
        })
        console.log(ArrayMascotasDB)

    } catch (error) {
        console.log(error);
    }



})


module.exports = router;

