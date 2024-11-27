import User from '../dao/models/User';

export const create = async (userData) => {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
};

export const getAll = async () => {
    return await User.find();
};