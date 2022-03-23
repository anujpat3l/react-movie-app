const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const fields = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    tableName: 'movies',
    schema: 'public',
  };

  const Movie = sequelize.define('Movie', fields, config);

  return Movie;
};
