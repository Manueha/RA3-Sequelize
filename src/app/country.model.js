const DataTypes = require("sequelize")

const getModelCountry = (db) =>{
  return db.define("country",{
    country_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING
    },
    last_update: {
      type: DataTypes.DATE
    }
  });
}

module.exports = {getModelCountry}
