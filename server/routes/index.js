const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/cars', controllers.getAllCars)
router.post('/cars', controllers.createCar)
router.get('/cars/:id', controllers.getCarById)
router.put('/cars/:id', controllers.updateCar)
router.delete('/cars/:id', controllers.deleteCar)

module.exports = router;
