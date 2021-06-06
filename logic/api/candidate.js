const router = require('express').Router();
const candidateController = require('../controller/candidate');

router.get('/', async (req, res) => {
    try {
        const result = await candidateController.getBy10(req.params.offser, req.params.index);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const result = await candidateController.create(req.body.newCandidate);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            Error: "Co gi do sai sai"
        })
    }
})

module.exports = router;