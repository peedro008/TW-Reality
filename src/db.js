require("dotenv").config();
const { compare } = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:pesanmene@localhost:5432/TWreality",
  { logging: false }
);



const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Users,
  Sell
} = sequelize.models;


Users.hasMany(Users, {
  foreignKey: {
    name: "ReferredId",
    allowNull: true
  }
})
Users.belongsTo(Users)

Users.hasMany(Sell, {
  foreignKey: {
    name: "UserId",
    allowNull: false
  }
})
Sell.belongsTo(Users)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importart la conexión { conn } = require('./db.js');
};
