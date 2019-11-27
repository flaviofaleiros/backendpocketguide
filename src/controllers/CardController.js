const Card  = require('../models/Card');

module.exports = {
    async store(req, res){
        const { description } =  req.body;
        let card  = await Card.findOne({description: description});

        if (!card){
            card = await Card.create({ description });
        }
        return res.json(card);
    }
};