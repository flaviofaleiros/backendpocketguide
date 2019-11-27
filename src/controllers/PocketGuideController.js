const PocketGuide = require('../models/PocketGuide');

module.exports = {
    async store(req, res) {
        const { date } = req.body;
        const { hour } = req.body;
        const { type } = req.body;
        const { description } = req.body;
        const { money } = req.body;
        const { paymenttype } = req.body;
        const { notes } = req.body;
        const { user_id } = req.body;
        const { account_id } = req.body;
        const { category_id } = req.body;
        const { card_id } = req.body;

        let pocketguide = await PocketGuide.findOne({ date: date, hour: hour, money: money });

        if (!pocketguide) {
            const pocketguide = await PocketGuide.create({
                date,
                hour,
                type,
                description,
                money,
                paymenttype,
                notes,
                user: user_id,
                account: account_id,
                category: category_id,
                card: card_id,
            });
            return res.json(pocketguide);
        } else {
            return res.json({Description: "Conta já Cadastrada!"});
        }

        
    }

};