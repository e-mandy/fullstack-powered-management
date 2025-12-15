import Document from '../models/Document.js';
import Flashcard from '../models/Flashcard.js';
import Quiz from '../models/Quiz.js';
import { extractTextFromPDF } from '../utils/pdfParser.js';
import { chunkText } from '../utils/textChunker.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';


// Upload d'un document PDF
export const uploadDocument = async (req, res, next) => {
    try{

    }catch(error){
        // Clean up file file on error
        if(req.file) {
            await fs.unlink(req.file.path).catch(() => {})
        }
        next(error);
    }
};

// Obtenir tous les docs
export const getDocuments = async (req, res, next) => {

};

// Obtenir un document spécifique
export const getDocument = async (req, res, next) => {

};

// Supprimer un document spécifique
export const deleteDocument = async (req, res, next) => {

};

// Mettre à jour un document
export const updateDocument = async (req, res, next) => {

};