const express = require('express');
const dialog = require('dialogflow-fulfillment');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res)=>{
    res.status(200).json({msg: 'all ok'});
})

app.post('/infocafe', async(req, res)=>{

    const agent = new dialog.WebhookClient({request:req, response:res});

    let intentMap = new Map();

    

    intentMap.set('info.cafe', (agent)=>{

        agent.add('Hoy tenemos cafes calientes, frios y frappuccinos');

    });

    agent.handleRequest(intentMap);

});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})