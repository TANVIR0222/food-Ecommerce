const mongoose = require('mongoose');

const express = require('express');
const mogoose = require('mogoose');
mogoose.connect('mongodb+srv://real-estate:Kszul3Z7nwzucwt7@cluster0.fkatlm9.mongodb.net/reat-state?retryWrites=true&w=majority&appName=Cluster0')
const app = express();

const port = process.env.PORT || 5000;
app.listen(300, ()=>{
    console.log(`server is runing ${port}` );
})

app.get('/' , (req,res)=>{
    res.send('server is running')
})

// H7LtQ1ZtuMe9IAsg
// Kszul3Z7nwzucwt7
// hv;jdhfjdf
// real-estate