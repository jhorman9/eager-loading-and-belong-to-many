import { Router } from "express";
import { getAllAutos, createAuto, deleteAuto } from "./autos.controllers.js";

const router = Router();

//Asi se crea pero tambien como abajo 
//router.get('/autos', getAllAutos);

// Construir un endpoint para agregar un auto a la base de datos.
// La información que se debe enviar es la siguiente:
// name, year, brandId, transmission

router.route('/autos')
    .get(getAllAutos)
    .post(createAuto)

router.route('/autos/:id')
    .get(deleteAuto)

export default router;

// Auto tiene una marca
// Marca tiene un pais
// Auto es del pais de la marca

// Si un video es de un curso
// Un curso tiene categoria
// El video tiene la categoria del curso