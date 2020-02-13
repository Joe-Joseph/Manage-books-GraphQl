const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// Allow cross origin request

app.use(cors())

//Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once('open', () => {
    console.log('Connected to database')
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});