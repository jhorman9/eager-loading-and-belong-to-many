// importar todos nuestros modelos
import Auto from './autos.model.js';
import Brand from './brands.model.js';
import Country from './countries.model.js';
import Gammas from './gammas.model.js';
import Transmission from './transmissions.model.js';

const initModels = () => {

    // Relacion entre Auto y Marca
    // Un Auto pertenece a una Brand
    Auto.belongsTo(Brand, {foreignKey: 'brandId'});
    // Brands tiene muchos Auto
    Brand.hasMany(Auto, {foreignKey: 'brandId'});

    // Relacion entre brand y country
    // Una Marca pertenece a un País
    Brand.belongsTo(Country, {foreignKey: 'countryId'});
    // Un pais tiene muchas Marcas
    Country.hasMany(Brand, {foreignKey: 'countryId'});

    // Autos y transmisiones
    // Un auto tiene muchas transmisiones
    Auto.belongsToMany(Transmission, {through: 'AutoTransmissions'});
    // una transmision la puede tener muchos autos
    Transmission.belongsToMany(Auto, {through: 'AutoTransmissions'});

    Gammas.belongsToMany(Auto, {through: 'AutoGammas'});
    // una transmision la puede tener muchos autos
    Auto.belongsToMany(Gammas, {through: 'AutoGammas'});
};

export default initModels;