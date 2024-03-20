const Restaurant = require("../models/Restaurant")
const Review = require("../models/Review")

// function that fetchs random items from a collection
const fetch_random_items = async (model, count) => {
    const items = await model.find();
    if (items.length === 0) {
        throw new Error('No items found');
    }
    return items.sort(() => Math.random() - 0.5).slice(0, count);
};

// fetches 5 random restaurants
const get_random_restaurants = async (req, res) => {
    try {
        const randomRestaurants = await fetch_random_items(Restaurant, 5);
        res.json(randomRestaurants);
    } catch (error) {
        res.status(404).json({ error: 'Ainda não há restaurantes cadastrados' });
    }
};

// fetches 5 random reviews
const get_random_reviews = async (req, res) => {
    try {
        const randomReviews = await fetch_random_items(Review, 5);
        res.json(randomReviews);
    } catch (error) {
        res.status(404).json({ error: 'Ainda não há reviews cadastradas' });
    }
};

// finds the 5 most liked reviews
const get_most_liked_reviews = async (req, res) => {
    const reviews = await Review.find()

    if (reviews.length === 0) {
        return res.status(404).json({ error: 'Ainda não há reviews cadastradas' })
    }
    else {
        const most_liked_reviews = await Review.find().sort({ likes: -1 }).limit(5);
        res.json(most_liked_reviews)
    }
}

module.exports = {
    get_random_restaurants,
    get_random_reviews,
    get_most_liked_reviews
};