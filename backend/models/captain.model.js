const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long']
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 character long']
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be 5 character long'],
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/,'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false,
        },
    
    socketId: {
        type: String,
    },
    staus:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 character long'],
        },
        plate:{
            type:{
                type:String,
                required:true,
                minlength:[3,'Plate must be at least 3 character long'],
            }
        },
        capacity:{
            type:{
                type:Number,
                required:true,
                minlength:[3,'Capacity must be at least 3 character long'],
            }
        },
        vehicleType:{
            type:{
                type:String,
                required:true,
                enum:['car','motorcycle','auto'],
            }
        }
    },

    location:{
        lat:{
            type:Number
        },
        lnh:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , { expiresIn:'24h' })
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const cpatainModel = mongoose.model('caption', captainSchema);