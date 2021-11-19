const router = require('express').Router();

const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/dashboard', adminController.viewDasboard)

module.exports = router;
