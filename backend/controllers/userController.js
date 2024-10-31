const { User, Admin } = require('../models');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const [updated] = await User.update({ name, email }, {
            where: { id }
        });
        if (!updated) {
            return res.status(404).send('User not found');
        }
        const updatedUser = await User.findOne({ where: { id } });
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await User.destroy({
            where: { id }
        });
        if (!deleted) {
            return res.status(404).send('User not found');
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({ username, email, password: hashedPassword });
        res.status(201).json(admin);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    registerAdmin,
};