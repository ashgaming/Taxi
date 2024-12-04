const userModel = require('../models/user.model')

module.exports.createCaptain = async ({
    firstname, lastname, email, password , 
    socketId ,color,plate, capacity,vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType ) {
        throw new Error('All fiels are required');
    }

    const captain = userModel.create({
        fullname: {  firstname, lastname },
        email,
        password,
        vehicle: { color, plate, capacity, vehicleType },
    })

    return captain;
}