const mongoose = require("mongoose")

const veterinariaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Por favor ingrese el nombre de la mascota"]
    },

    dueño: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Por favor ingrese el nombre del dueño"],
        ref: "dueño"
    },

    especie:{
        type: String,
        required: [true, "Por favor ingrese la especie de la mascota"]
    },

    edad:{
        type: Number,
        required: [true, "Por favor ingrese la edad de la mascota"]
    },

    peso:{
        type: Number,
        required: [true, "Por favor ingrese el peso de la mascota"]
    },

    motivo:{
        type: String,
        required: [true, "Por favor ingrese el motivo de visita"]
    },

    temperatura: {
        type: Number,
        required: [true, "Por favor ingrese la temperatura de la mascota"]
    },

    fc:{
        type: Number,
        required: [true, "Por favor ingrese la frecuencia cardiaca de la mascota"]
    },

    fr: {
        type: Number,
        required: [true, "Por favor ingrese la frecuencia respiratoria de la mascota"]
    }
})

module.exports = mongoose.model ("Veterinaria", veterinariaSchema)