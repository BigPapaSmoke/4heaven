const express = require('express');
const router = express.Router();

// Route to the root 
router.get('/', (req, res) => {
    res.render('layouts/index');
});

router.get('/about', (req, res) => {
    res.render('home/about');
});




module.exports = router;