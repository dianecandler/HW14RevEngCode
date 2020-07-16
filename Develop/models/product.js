module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      // The email cannot be null, and must be a proper email before creation   
      productName: {
        type: DataTypes.STRING,
        allowNull: false

      },
      // The password cannot be null
      categoryType: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return Product;

  };