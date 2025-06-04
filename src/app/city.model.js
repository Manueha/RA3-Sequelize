const DataTypes = require("sequelize")

const getModelCity = (db) =>{
  return db.define("city",{
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
    },
    country_id: {
      type: DataTypes.INTEGER
    },
    last_update: {
      type: DataTypes.DATE
    }
  });
}

module.exports = {getModelCity}
