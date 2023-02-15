const Mascota = require ("../models/mascotaModel")

const getMascota = (req, res) => {
    res.status(200).json({message:Veterinaria})
}

const setMascota = (req, res) => {
    res.status(200).json({message:"Mascota creada"})
}

const updateMascota = (req, res) => {
    res.status(200).json({message:"Mascota actualizada"})
}

const deleteMascota = (req,res) => {
    res.status(200).json({message: "Mascota eliminada"})
}

module.exports={
    getMascota,
    setMascota,
    updateMascota,
    deleteMascota
}