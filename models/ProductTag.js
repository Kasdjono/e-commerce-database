const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}


// ------ See Through Table ------ //

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,    // id is primary key
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,    // links ProductTag to Product
      references: {               // 'product_id' 
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,    // links ProductTag to Tag
      references: {               // 'tag_id' 
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
