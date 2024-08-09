import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Auto = db.define('autos', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    year: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "brand_id",
    }
}, {
    timestamps: false
});

export default Auto;