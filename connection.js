require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `${process.env.DB_URI}`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('Connectado a mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

