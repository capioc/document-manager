'use strict';

const User = require("./user.model");

exports.index = async function (req, res) {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
};

exports.query = async function (req, res) {
    try {
        // if (req.params && req.params.q)
        let errors = ['er'];
        let users;
console.log(typeof req.query, req.query.name)
        if (!req.query) errors.push('no query parameters');
        
        if (req.query.name) {
            console.log(errors)
            let name = new RegExp(req.query.name);
            users = await User.find( {
                firstname: { $regex: name, $options: 'i' }
            }) 
            res.json(users);   
        } else {
            res.json(errors);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.create = async function (req, res) {
    try {
        console.log(req.body)
        const { firstname, lastname } = req.body;

        if (!firstname || !lastname) {
            res.status(400).send('Please enter all fields');
            return;
        }

        const user = new User({
            firstname,
            lastname
        });
        let newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
}

exports.getUsersByName = async function (req, res) {
    try {
        
    } catch (error) {
        
    }
}