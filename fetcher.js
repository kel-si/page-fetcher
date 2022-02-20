//Use Node's fs (file system) module to write the file
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];
const request = require('request');
const content = "content";

request(url, (error, response, body) => {
  const fileSize = body.length;
  fs.writeFile(filePath, content, error => {
    if (error) {
      console.log("error:", error);
      return;
    }
});

console.log(`Downloaded and saved ${fileSize} to ${filePath}`);
})
 

//1. You need to make an http request and wait for the response.

//2. take the data you receive and write it to a file in your local filesystem

//use nested callbacks

//DO NOT use pipe function
//DO NOT use synchronous functions