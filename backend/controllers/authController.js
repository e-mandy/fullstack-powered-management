import jwt from 'jsonwebtoken';
import User from '../models/User';

// Génération du JWT token
const generateToken = (id) => {
    jwt.sign({id: id}, process.env.JWT_SECRET_KEY, {
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
        const user = User.create({
            username,
            email,
            password
        });

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
export const updateProfil = async (req, res, next) => {
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