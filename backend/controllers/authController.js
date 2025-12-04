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
    try{

    }catch(error){
        next(error)
    }
};

// Logique de connexion
export const login = async (req, res, next) => {

};    

// Récupération des informations de profil d'un utilisateur
export const getProfile = async (req, res, next) => {

};

// Mise à jour du profil d'un utilisateur
export const updateProfil = async (req, res, next) => {

};

// Modification du mot de passe de l'utilisateur
export const changePassword = async (req, res, next) => {

};