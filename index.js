const express = require("express");
const app = express();
const morgan = require("morgan")
const port = process.env.port || 8000;

app.use(
    morgan(function (tokens, req, res) {
        return [
            `Method - ${tokens.method(req, res)}`,
            `Status - ${tokens.status(req, res)}`,
            `Content length - ${tokens.res(req, res, 'content-length')}`,
            `Time taken - ${tokens['response-time'](req, res)}`,
            `Date -  ${tokens['date'](req, res)}`,
            `HTTP version - ${tokens['http-version'](req, res)}`,
            `URL accesed - ${tokens.url(req, res)}`,
        ].join('\n')
      })
)

app.get("/", (req,res) =>{
    res.send("Express Morgan Middleware")
})

app.get("/morgan", (req,res) =>{
    res.send("Get request successful")
})

app.post("/morgan", (req,res) =>{
    res.send("Post request successful")
})

app.listen(port , () => {
   console.log("SERVER RUNNING AT ",port)
})