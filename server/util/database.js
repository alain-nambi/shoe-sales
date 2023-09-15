import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import { development, production, test } from "../config/config.js";

const sequelize = new Sequelize(development);

export default sequelize;
