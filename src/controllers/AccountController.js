const Account  = require('../models/Account');

module.exports = {
    async store(req, res){
        const { description } =  req.body;
        let account  = await Account.findOne({description: description});

        if (!account){
            account = await Account.create({ description });
        }
        return res.json(account);
    }
};