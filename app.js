const express = require('express');
const dialog = require('dialogflow-fulfillment');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res)=>{
    res.status(200).json({msg: 'all ok'});
})

app.post('/infocafe', async(req, res)=>{

    const agent = new dialog.WebhookClient({request:req, response:res});

    let intentMap = new map();

    intentMap.set('info.cafe', (agent)=>{

        agent.add('Hoy tenemos cafes calientes, frios y frappuccinos');

    });

});

app.listen(PORT, ()=>{
    console.log(`Server listening on port 3001`);
})