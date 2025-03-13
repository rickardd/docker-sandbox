// const { Sequelize, DataTypes } = require('sequelize');

// // Initialize Sequelize (you can also pass the sequelize instance from index.js)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'database.sqlite' // Path to the SQLite database file
// });

// // Define the User model
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }
// });

// // Sync the model with the database
// async function syncUserModel() {
//   await User.sync();
//   console.log('User table has been created.');
// }

// // Export the User model and the sync function
// module.exports = {
//   User,
//   syncUserModel
// };

// to use this add const { User, syncUserModel } = require('./models/user'); // Import User model
// to backend/index.js
