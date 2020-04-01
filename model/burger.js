const Sequelize = require("sequelize");
/*
id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.
*/

const sequelize = new Sequelize("burger", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
const Model = Sequelize.Model;
class burger extends Model {}
burger.init(
  {
    // attributes
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "burger"
    // options
  }
);
module.exports = burger;
//------------------------------------------------------

//-------------------------------------

//----------------------------------
// test connection
//-----------------------------------
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
