const Category  = require('../models/Category');

module.exports = {
    async store(req, res){
        const { description } =  req.body;
        let category  = await Category.findOne({description: description});

        if (!category){
            category = await Category.create({ description });
        }
        return res.json(category);
    }
};