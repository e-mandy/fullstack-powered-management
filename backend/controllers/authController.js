import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Génération du JWT token
const generateToken = (id) => {
    jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || '7d'
    });
};


// Mise en place de la logique de connexion
export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try{
        const userExists = await User.findOne({ $or: [{email}] });

        if(userExists) {
            return res.status(400).json({
                success: false,
                error: 
                    userExists.email === email 
                    ? "Email already registered"
                    : "Username already taken",
                statusCode: 400
            });
        }

        // Create user
        const user = await User.create({
            username,
            email,
            password
        });
        console.log(user)
        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    profileImage: user.profileImage,
                    createdAt: user.createdAt
                },
                token,
            },
            message: "User registered successfully"
        })
    }catch(error){
        next(error)
    }
};

// Logique de connexion
export const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                error: "Please provide email and password",
                statusCode: 400
            });
        }

        // On récupère le user en bdd
        const user = await User.findOne({ email }).select('+password');

        if(!user){
            return res.status(401).json({
                success: false,
                error: "Invalid credentials",
                statusCode: 401
            });
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                error: "Invalid credentials",
                statusCode: 401
            });
        }
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            },
            token,
            message: "Login successful"
        });
    }catch(error){
        next(error)
    }
};    

// Récupération des informations de profil d'un utilisateur
export const getProfile = async (req, res, next) => {
    try{

    }catch(error){
        next(error)
    }
};

// Mise à jour du profil d'un utilisateur
export const updateProfile = async (req, res, next) => {
    try{

    }catch(error){
        next(error)
    }
};

// Modification du mot de passe de l'utilisateur
export const changePassword = async (req, res, next) => {
    try{

    }catch(error){
        next(error)
    }
};