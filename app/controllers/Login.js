const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../schema/User')
const bcrypt = require('bcrypt')


class Login {

	login() {

	}

}


module.exports = new Login