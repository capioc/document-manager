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