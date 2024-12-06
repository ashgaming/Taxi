const express = require('express')
const router = express.Router();

const { body } = require("express-validator")
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be 3 character long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('color must be 3 letter long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('plate must be 3 letter long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a positive number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Entry Type'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('color must be 3 letter long'),
], captainController.registerCaptain)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long')
], captainController.loginCaptain)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)








module.exports = router;