
const router = require('express').Router();

const galtecController = require('../controllers/galtecController');

router.get('/', galtecController.index2);
router.get('/test', galtecController.test);
router.get('/contacto', galtecController.contacto);
router.get('/nosotros', galtecController.nosotros);
router.get('/servicios', galtecController.servicios);
router.post('/enviar_msg', galtecController.enviar_msg);
//router.post('/enviar', PanamController.enviar);
//router.get('/exito', PanamController.exito);
//router.get('/denuncia', PanamController.denuncia);
//router.post('/enviar_denuncia', PanamController.enviar_denuncia);
/*router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
                    router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
*/
module.exports = router;
