import Auto from "../../models/autos.model.js";
import Brand from "../../models/brands.model.js";
import Country from "../../models/countries.model.js";
import Gammas from "../../models/gammas.model.js";
import Transmission from "../../models/transmissions.model.js";

const getAllAutos = async (req, res) => {
    try {
        const autos = await Auto.findAll({ 
            attributes: {exclude: ['brandId']},
            include: [
                {
                    model: Brand, 
                    attributes: ['id', 'name'],
                    include: { model: Country }
                },
                { 
                    model: Transmission, 
                    attributes: ["type"], 
                },
                {
                    model: Gammas,
                    attributes: ["type"]
                }
            ],
        });
        res.status(200).json(autos);
    } catch (error) {
        res.status(400).json({message: error});
    }
};

const createAuto = async(req, res) => {
    try {
        // Destructurando el body de la petición
        // { name: '4', year: 1997, brandId: 1, transmission: 2 } = req.body;
        // ...auto es el rest operator
        // Saca a transmission, desctrucutando y el resto del objeto se llamará auto con el rest operator { ...auto }
        const { transmission, ...auto } = req.body;
        const newAuto = await Auto.create(auto);
        const autoTransmission = await Transmission.findOne({where: { type: transmission }});

        if (!autoTransmission) {
            await Auto.destroy( { where: { id: newAuto.id } } )
            return res.status(404).json({ message: 'Transmisión no encontrada' });
        }

        await newAuto.addTransmission(autoTransmission); //add + nombre de modelo => addTransmission
        res.status(201).json({ message: 'Auto creado exitosamente' });
    } catch (error) {
        res.status(400).json({message: error});
        console.log(error);
    }
};

const deleteAuto = async(req, res) => {
    try {
        const { id } = req.params;
        await Auto.destroy({ where: { id } });
        res.status(200).json({ message: `Auto con ID ${id} ha sido eliminado` });
    } catch (error) {
        res.status(400).json(error);
    }
};
 
export{
    getAllAutos,
    createAuto,
    deleteAuto
};