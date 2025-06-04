const Sequelize = require("sequelize")
const crearConfigBaseDades = () =>{
  return new Sequelize("uniadriatregon","root","root",{
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquite: 30000,
      idle: 10000
    }
  });
}

module.exports ={crearConfigBaseDades}
