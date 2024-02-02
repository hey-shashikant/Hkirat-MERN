const express = require('express')
const app = express()
const port = 3000


function middleware1(req, res, next) {

    console.log("From inside middleware : " + req.headers.counter);
    next();
}
app.use(middleware1);

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i <= counter; i += 1) {
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    // var counter = req.query.counter;
    console.log(req.headers);
    var counter = req.headers.counter;
    var calculatedSum = calculateSum(counter);

    var answer = "Sum is : " + calculatedSum;
    res.send(answer);
}

// app.get('/handleSum', handleFirstRequest)
app.post('/handleSum',handleFirstRequest)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
