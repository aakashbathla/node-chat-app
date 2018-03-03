const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 4000;
var app = express();
app.use(express.static(publicPath));
app.listen(port,()=>{
	console.log(`port is started at ${port}`);
})
console.log(__dirname + '/../public');
console.log(publicPath);
