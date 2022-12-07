'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movies.belongsTo(models.Genres, {
        foreignKey: 'genre_id',
        as: 'genre',
      });
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'Image must be a valid url',
        },
      },
    },
    releaseYear: DataTypes.INTEGER,
    genre_id: {

      type: DataTypes.INTEGER,
      references: {
        model: 'genres'
      }
    }
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};
