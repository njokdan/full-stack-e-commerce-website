"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.TEXT,
      isbn_10: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
