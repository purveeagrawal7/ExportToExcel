//"use strict"

// var express = require('express');
// var fs = require('fs');
// var path = require('path');
// var bodyParser = require('body-parser');

// var app = express();

// var PRODUCTS_FILE = path.join(__dirname, 'products.json');

// //Set Port
// app.set('port', (process.env.PORT || 4444));

// // Set Static path
// app.use(express.static(path.join(__dirname,'client')));
// console.log(path.join(__dirname,'client'));
// //const indexPath = path.join(__dirname, 'client','index.html');

// // BodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// // app.get('/', function(req, res){
// // 		res.setHeader('content-Type', 'application/javascript');
// // });
// //app.get('/', function (_, res) { res.sendFile(indexPath) });
// // Get Products
// app.get('/products', function(req, res){
// 	fs.readFile(PRODUCTS_FILE, function(err, data){
// 		res.setHeader('Cache-Control', 'no-cache');
// 		res.json(JSON.parse(data));
// 	});
// });

// // Add Products
// app.post('/products', function(req, res){
// 	fs.readFile(PRODUCTS_FILE, function(err, data){
// 		var products = JSON.parse(data);
// 		products.push(req.body);
// 		fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 3), function(err){
// 			res.setHeader('Cache-Control', 'no-cache');
// 			res.json(products);
// 		});
// 	});
// });

// // Start Server
// app.listen(app.get('port'), function(){
// 	console.log('Server Has Started On Port: '+ app.get('port'));
// });