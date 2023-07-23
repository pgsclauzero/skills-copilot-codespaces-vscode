// Create web server application which is responsible to do below task, 
// Accept student name and his total marks from query string. 
// Calculate percentage & display grade. 
// If percentage > 75 then print first division with honours. 
// If percentage is between 60 to 75 print First Division. 
// If percentage is between 45 to 60 print Second Division. 
// If percentage is between 33 to 45 print Pass class. 
// If percentage is less than 33 print Fail. 

// import express module
const express = require("express");
// create express object
const app = express();
// import url module
const url = require("url");
// import querystring module
const querystring = require("querystring");

// create get request
app.get("/student", (req, res) => {
    // read query string
    let obj = url.parse(req.url);
    // convert query string into object
    let obj2 = querystring.parse(obj.query);
    // calculate percentage
    let per = (parseInt(obj2.m1) + parseInt(obj2.m2) + parseInt(obj2.m3)) / 3;
    // check percentage
    if (per > 75) {
        res.send("First Division with Honours");
    } else if (per >= 60 && per <= 75) {
        res.send("First Division");
    } else if (per >= 45 && per < 60) {
        res.send("Second Division");
    } else if (per >= 33 && per < 45) {
        res.send("Pass Class");
    } else {
        res.send("Fail");
    }
})

// assign port no
app.listen(3000, () => {
    console.log("Server running on port no 3000");
})