const db = require('../dbconfig.js')

getUsers = () => {
    return db('users')
};

getUserById = (id) => {
    return db('users')
    .where({ id })
};

postNewUser = (user) => {
    return db('users').insert(user)
};

editUser = (id, user) => {
    return db('users').where({ id }).update(user)
};

deleteUser = (id) => {
    return db('users').where({ id })
};

getUserByUserType = (user) => {
    const id = users.id
    const type = user.user_type
    const userTypeData = db(`${type}`)
    .where({id})
    .first()
}

module.exports = {
    getUsers,
    getUserById,
    postNewUser,
    editUser,
    deleteUser
}