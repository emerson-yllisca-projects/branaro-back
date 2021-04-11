require('dotenv').config(); //variables de entorno
const app = require('./server/app');
const { connection } = require('./database/db')

const port = process.env.APP_PORT;

app.listen(port , ( () => {
    console.log('Servidor inicializado en el puerto' + port );
    connection.sync().then(() => {
        console.log("se establecio la conexion")
         }).catch(e => {
        console.log("error al cocnectar", e.message)
    })
}))