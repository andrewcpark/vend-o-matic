const express = require('express');
const router = express.Router();

router.put('/', (req, res) => {
    return res.status(204).set({
        'X-Coins' : 5
    })
});

router.delete('/', (req, res) => {
    return res.send(204)
});

router.get('/inventory', (req, res) => {
    return res.send(200)
});

router.get('/inventory/:id', (req, res) => {
    return res.send(200)
});

router.put('/inventory/:id', (req, res) => {
    return res.send(200)
});

router.put('/inventory/:id', (req, res) => res.send(403));

router.put('/inventory/:id', (req, res) => res.send(403));

module.exports = router;