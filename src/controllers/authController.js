import authModel from "../models/authModel.js";
import jwt from "jsonwebtoken";

process.loadEnvFile();
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if ( !username || !password || !email ) {
            return res.status(400).json({ error: "bad request, invalid data" });
        };
    
        const newUser = await authModel.register({ username, password, email });
    
        if (newUser === null) {
            return res.status(400).json({ error: "bad request" });
        };
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "internal server error", error: error.message });
    };

};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if ( !username || !password ) {
            return res.status(400).json({ error: "Username and password are required" });
        };

        const user = await authModel.login({ username, password });

        if ( !user ) {
            return res.status(400).json({ error: "Invalid username or password" });
        };

        const token = jwt.sign({ id: user._id, username: username }, JWT_SECRET, { expiresIn: '1h'} );

        res.status(200).json({ message: "Login succcesful", user: { id: user._id, username: username }, token});
    } catch (error) {
        res.status(500).json({ error: "internal server error", error: error.message });
    };
};

export { register, login };