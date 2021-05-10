const mongoose =  require('../services/mongoose').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
            minlength: 5
        },
        token: {
            type: String
        },
        role: {
            type: Number,
            default: 0
        }   
    },
    {
        collection: "userlists",
    }
)

module.exports = mongoose.model("userSchema", userSchema);
