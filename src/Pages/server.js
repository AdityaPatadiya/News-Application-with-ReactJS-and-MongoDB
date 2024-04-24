const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const connectDB = async (uri) => {
    await mongoose.connect(uri)
        .then(() => console.log('Database Conneected!'))
        .catch((err) => console.log(err))
}
connectDB(Mongodb_database_connection_string);

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Interests: [String]
});
const User = mongoose.model('User', userSchema);

// API endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const userData = req.body
        const newUser = new User(userData);
        let result = await newUser.save();
        result = result.toObject();
        if (result)
            console.log(result);
        res.status(200).send("User registering successfully!");

    } catch (error) {
        console.error(error);
        res.send("Error");
    }
});

// API endpoint for user login
app.post('/login', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            console.log(res.status);
            res.status(200).json({ message: "Login successful!" });
        } else {
            console.log(res.status);
            res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error during login");
    }
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
