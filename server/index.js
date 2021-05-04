const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const moviesRoute = require('./routes/movie.js');
const genresRoute = require('./routes/genre.js');
const adminRoute = require('./routes/admin.js');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Success');
});

app.use('/movies', moviesRoute);
app.use('/genres', genresRoute);
app.use('/admin', adminRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);