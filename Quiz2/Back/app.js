require('dotenv').config();
const express = require('express');
const cors = require('cors');
const formrouter = require('./Router/form-router');
const { sequelize } = require('./models');
const app = express();
const PORT = process.env.PORT;

try {
  //please create database before
  // sequelize.sync({ alter: true });
} catch (e) {
  console.log(e);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/form', formrouter);

//
app.listen(PORT, () => {
  console.log('server running on port' + PORT);
});
