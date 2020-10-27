const express = require('express');

const app = express();

app.use(express.json());

const ctl = require('../server/controllers/messages_controller')

app.get('/api/messages', ctl.read);

app.post('/api/messages', ctl.create);

app.put('/api/messages/:id', ctl.update)

app.delete('/api/messages/:id', ctl.delete)


const port = 3001;

app.listen(port, ()=>{ console.log(`App started listening on port ${port}`)})



