
require('dotenv').config();
module.exports = {
    username: process.env.USERBD || 'root',
    password: process.env.PASSDB || '',
    database: process.env.DATABASE || 'branaro',
    host: process.env.HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    define: {
        timestamps: false,
        underscored: true
    }

}