import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Gammas = db.define('gammas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: false
}); 

export default Gammas;