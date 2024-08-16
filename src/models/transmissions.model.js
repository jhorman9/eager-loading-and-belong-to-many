import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Transmission = db.define('transmissions', {
    type: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    deletedAt: 'destroyTime'
});

export default Transmission;