'use strict';

var IndexModel = require('../models/index');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var mailOptions,
	result;

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        
        res.render('index', model);
        
        
    });

    router.post('/sendEmail', function (req, res) {
    	console.log(req.body);
    	mailOptions = {
    		from: req.body.email,
		    to: 'abhishekgupta_92@hotmail.com',
		    subject: 'Contact',
		    text: req.body.message
    	};

    	transporter.sendMail(mailOptions, function(error, info) {
    		console.log(mailOptions);
    		console.log("............******....................");
		    if(error){
		    	console.log(error);
		    	console.log("................................");
		    	result = false;
		        return result = false;
		    } else {
		    	return result=true;
		    }
		    console.log(info);
		});
        
       
    });

};
