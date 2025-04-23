const express = require('express');
const routes = require('./routes');
const { runConsumer } = require('./controllers/userController');

const app = express();

app.use(express.json());
app.use('/api', routes);

runConsumer().catch(console.error);

app.listen(3001, () => {
    console.log('User Management Service running on port 3001');
});