const express = require("express")
const router = express.Router()

const RatingController = require("../controllers/ratingController")

router.post('/:idrest/:iduser', RatingController.rating_post)

router.get('/:idrest/avg', RatingController.rating_avg)

router.get('/:idrest', RatingController.rating_list)

router.get('/:idrest/:iduser', RatingController.rating_get)

module.exports = router
