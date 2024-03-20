const Restaurant = require("../models/Restaurant");

const search_get = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        
        if (restaurants.length === 0) {
            return res.status(404).json({ error: 'Nenhum restaurante foi encontrado porque ainda não há restaurantes cadastrados' });
        }

        const searchName = req.body.name;

        if (!searchName) {
            return res.json(restaurants);
        }

        const regex = new RegExp(searchName, 'i');
        const matchedRestaurants = restaurants.filter(restaurant => regex.test(restaurant.name));

        if (matchedRestaurants.length === 0) {
            return res.status(404).json({ error: `Nenhum restaurante contém "${searchName}" no nome` });
        }

        return res.json(matchedRestaurants);
    } catch (error) {
        return res.status(500).json({ error: 'Ocorreu um erro ao processar a requisição' });
    }
};

module.exports = {
    search_get
};
