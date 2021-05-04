const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.js');

const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Admin.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "Admin does not exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const existingUser = await Admin.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Admin.create({ email, password: hashedPassword, name });
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { logIn, signup };
