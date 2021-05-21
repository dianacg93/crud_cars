const db = require('../db')
const CarBrand = require('../models/CarBrand')
const CarModel = require('../models/CarModel')
const faker = require('faker')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const carbrands = [...Array(10)].map(brand => (
        {
            manufacturer: faker.vehicle.manufacturer(),
            headquarters: faker.address.country(),
            website: faker.internet.url()
        }
    ))
    const createdCarBrands = await CarBrand.insertMany(carbrands)
    console.log('Created car brands!')
    const carmodels = [...Array(50)].map(model => {
        const carbrand = createdCarBrands[Math.floor(Math.random() * 10)]
        return {
            model: faker.vehicle.model(),
            type: faker.vehicle.type(),
            name: faker.vehicle.name(),
            image_url: faker.internet.url(),
            brand_id: carbrand._id
        }
    })
    await CarModel.insertMany(carmodels)
    console.log('Created car models!')
}
const run = async () => {
    await main()
    db.close()
}
run()