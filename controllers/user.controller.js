const { User } = require('./../models/user');
const _ = require('lodash');

module.exports.getUsers = async (req, res) => {
  console.log(`getUsers from User.controller`);
};
module.exports.getUserById = async (req, res) => {
  console.log(`getUserById from User.controller`);
};

module.exports.createUser = async (req, res, next) => {
  console.log(`createUser from User.controller`);
  const { body } = req;
  console.log(`body`, body);
  try {
    const createdUser = await User.create(body);
    console.log(`createdUser`, createdUser.get());

    const preparedUser = _.omit(createdUser.get(), [
      'id',
      'passwordHash',
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send(preparedUser);
  } catch (e) {
    next(e);
  }
};

module.exports.updateUser = async (req, res) => {
  console.log(`updateUser from User.controller`);
};
module.exports.deleteUser = async (req, res) => {
  console.log(`deleteUser from User.controller`);
};
module.exports.getUserTasks = async (req, res) => {
  console.log(`getUserTasks from User.controller`);
};
