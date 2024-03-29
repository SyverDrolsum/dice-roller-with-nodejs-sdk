const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000;


var http = require('http');
var url = require('url');
var dt = require('./datetime');




const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);
    
    // Standard Hello World.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Hello World!</h3>')

    // Access funcion from a separate JavaScript module.
    response.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");

    // Show the url. 
    response.write("req.url="+request.url+"<br><br>");

    // Suggest adding something tl the url so that we can parse it. 
    response.write("Consider adding '/test?year=2017&month=July' to the URL.<br><br>");
    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.write("txt="+txt);

    
    // Close the response
    response.end('<h3>The End.</h3>');
});

function RollIndividualDice() {
    return Math.floor(Math.random()*6) + 1;
}

app.get('/roll', (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1; 
    res.json({ result });
});

res.json({ results });


function rollDice() {   
    document.getElementById("dice1").value = RollIndividualDice();
    document.getElementById("dice2").value = RollIndividualDice();
    document.getElementById("dice3").value = RollIndividualDice();
    document.getElementById("dice4").value = RollIndividualDice();
    document.getElementById("dice5").value = RollIndividualDice();
}

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
