import express from 'express';
import db from './utils/database.js';
import 'dotenv/config';
import initModels from './models/initModel.js';
import autosRoutes from './components/autos/autos.routes.js';

initModels(); 

db.authenticate().then(() => console.log('conexión de base de datos exitoso')).catch((error) => console.log(error));

db.sync().then(() => console.log('Base de datos sincronizada')).catch((error) => console.log(error));

const PORT = process.env.PORT ?? 8000;

const app = express();
app.use(express.json());

app.use(autosRoutes);

app.get('/', (req, res) => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    res.json({ 
        message: 'Bienvenido a mi servidor',
        version: '1.0.0',
        author: 'Jhorman Nieto P',
        date: formattedDate,
        description: 'API para gestionar autos en una base de datos',
        github: 'https://github.com/jhorman9/eager-loading-and-belong-to-many'
    });
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});