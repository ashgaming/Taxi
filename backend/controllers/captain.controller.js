const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {


    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { fullname, email, password , vehicle } = req.body


    
    const isCaptainAlreadyExist = await captainModel.findOne({email}).exec();
    
    if(isCaptainAlreadyExist){
        return res.status(400).json({ errors: "Email already exist"})
    }

    const hashedPassword = await captainModel.hashedPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });
    
    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { email, password } = req.body

    const hashedPassword = await captainModel.hashedPassword(password);

    const captain = await captainModel.findOne({ email }).select('+password')

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const isMatch = await captain.comparePassword(password);


    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const token = captain.generateAuthToken();
    
    res.cookie('token',token);

    res.status(201).json({ token, captain })
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain : req.captain});
}

module.exports.logoutCaptain = async (req, res, next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({token});

    res.status(200).json({message:'Logout out'});
}