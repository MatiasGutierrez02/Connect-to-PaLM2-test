const express = require('express');
const router = express.Router();
const { sendRequest } = require('../utils/palm2-markersuite.js')

router.post('/sendRequest', async (req, res) => {
    try{
        const { prompt } = req.body;
        const result = await sendRequest(prompt);
        res.json({ result });

    } catch (error) {
        console.log('Error! ' + error);
        res.status(500).json({ error: 'Error en la consulta'});
    }
})

module.exports = router;