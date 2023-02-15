const mongoose = require ("mongoose")

const dueñoSchema = mongoose.Schema({
    dueño: {
        type: String,
        required: [true, "Por favor inserte el nombre del dueño"]
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model ("Dueño", dueñoSchema)