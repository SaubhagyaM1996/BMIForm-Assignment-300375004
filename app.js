const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', (req, res) => {
    res.render('bmi');
});

app.post('/bmiresult', (req,res) => {
    a = parseInt(req.body.age);
    w = parseInt(req.body.weight);
    h = parseInt(req.body.height);

    hInM = h/100;
    powH = Math.pow(hInM, 2)
    bmi = w / powH;

    res.render('result', {resultVal: bmi.toFixed(1) });
});

app.listen(3000, () =>{
    console.log("server started on port 3000");
});