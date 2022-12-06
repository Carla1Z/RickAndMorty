const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define('episode', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}