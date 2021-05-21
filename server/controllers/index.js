const CarBrand = require('../models/CarBrand')
const CarModel = require('../models/CarModel');

const createCar = async (req, res) => {
    try{
        const car = await new CarBrand(req.body)
        await car.save()
        return res.status(201).json(car)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllCars = async (req, res) => {
    try {
        const users = await CarBrand.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await CarBrand.findById(id)
        if (car) {
            return res.status(200).json(car)
        }
        return res.status(404).send('CarBrand with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        await CarBrand.findByIdAndUpdate(id, req.body, { new: true }, (err, car) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!car) {
                res.status(500).send('CarBrand not found!');
            }
            return res.status(200).json(car);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CarBrand.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("CarBrand deleted");
        }
        throw new Error("CarBrand not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
}