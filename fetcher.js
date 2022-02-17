//Use Node's fs (file system) module to write the file
const fs = require('fs');
const url = process.arg[2];
const filePath = process.arg[3];
const fileSize = body.length;


const request = (url, (error, response, body) => {
  console.log("Error:", error);
  console.log("Response:", response);
  console.log("Body:", body); 
});

//1. You need to make an http request and wait for the response.

//2. take the data you receive and write it to a file in your local filesystem

//use nested callbacks

//DO NOT use pipe function
//DO NOT use synchronous functions