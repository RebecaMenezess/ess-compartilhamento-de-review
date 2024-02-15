const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const RestaurantController = require("../controllers/restaurantController")

router.get('/', RestaurantController.restaurants_get)

router.get('/:id', RestaurantController.restaurant_profile_get)

router.post('/create', RestaurantController.restaurant_create)

router.put('/edit/:id', RestaurantController.restaurant_edit)

router.delete('/delete/:id', RestaurantController.restaurant_delete)

router.post('/upload', upload.single("file"), RestaurantController.restaurant_upload)

module.exports = router

