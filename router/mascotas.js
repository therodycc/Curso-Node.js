const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('mascotas', {
        arraymascotas:[
            {id:'1', nombre:'rex',descripcion:' rex descripcion' },
            {id:'2', nombre:'rambo',descripcion:' rambo descripcion' },
            {id:'3', nombre:'hax',descripcion:' hax descripcion' },
        ]
    })
})


module.exports = router;