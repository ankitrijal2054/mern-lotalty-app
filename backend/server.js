const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*const uri = process.env.CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected sucessfully");
})
app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
});
*/
const CONNECTION_URL = 'mongodb+srv://mernproject:mernproject123@cluster0.4aqft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server running on port: ' + PORT)))
    .catch((error) => console.log(error.message));

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);