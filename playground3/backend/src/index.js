const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

// Configure CORS to allow requests from http://127.0.0.1:8080
const corsOptions = {
    origin: 'http://127.0.0.1:8080', // Whitelist this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

app.use(express.json());

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Define User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

// Sync the database
sequelize.sync();

// CRUD API Endpoints
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Email must be unique rick' });
    }
    // Handle other errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});


app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port (v1) ${PORT}`);
});
