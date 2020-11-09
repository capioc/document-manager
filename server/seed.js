'use strict';

const User = require('./api/users/user.model');

exports.import = async function () {
    const count = await User.countDocuments();
    console.log(count)
    if (count > 0) {
        console.log('skip seed import');
    } else {
        const result = await User.insertMany([
            {
                firstname: 'John',
                lastname: 'Smith'
            },
            {
                firstname: 'Jane',
                lastname: 'Doe'
            },
            {
                firstname: 'John',
                lastname: 'Frusciante'
            },
            {
                firstname: 'Alexander',
                lastname: 'TheGreat'
            },
            {
                firstname: 'Bob',
                lastname: 'Spongebob'
            },
        ])
        console.log('imported seed', result)
    }
}