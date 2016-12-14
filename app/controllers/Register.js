"use strict";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../schema/User')
const bcrypt = require('bcrypt')

const saltRounds = 10;
const myPlaintextPassword = 'nipeharefa';

class Register {

	register(req, res){
		var store = function(password){
			var user = User({
				email: "foo@gmail.com",
				password,
				local: {
					name: "fo",
					email: "bar@gmail.com",
					password: password
				}
			})

			user.save().then(function(param){
				return res.json(param)
			})
		}
		var handlePass = bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
		  store(hash);
		});


	}

}
module.exports = new Register