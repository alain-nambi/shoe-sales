import Sequelize from "sequelize";
import db from "../util/database.js";

// Define the User model using Sequelize
const Products = db.define("Products", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  image: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
});

// Export the User model
export default Products;