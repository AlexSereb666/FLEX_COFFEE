const {Feedback} = require('../models/models')

class feedback {

    // создание жалобы //
    async create(req, res) {
        const {name, email, message} = req.body
        let currentDate = new Date();

        const _feedback = await Feedback.create({
            nameUser: name,
            responseUser: email,
            message: message,
            dateReq: currentDate,
        });

        return res.json(_feedback)
    }

    // получение всех жалоб //
    async getAll(req, res) {
        const _feedbacks = await Feedback.findAll();
        return res.json(_feedbacks);
    }
}

module.exports = new feedback()
