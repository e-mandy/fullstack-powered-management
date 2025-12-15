import fs from 'fs/promises';
import { PDFParse } from 'pdf-parse';


// Extract du texte du fichier PDF
export const extratTextFromPDF = async (filePath) => {
    try{
        const dataBuffer = await fs.readFile(filePath);

        // Pdf-parse expects a Uint8Array, not a buffer (on va s'expliquer ça)
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return {
            text: data.text,
            numPages: data.numpages,
            info: data.info
        };
    }catch(error){
        console.error('PDF parsing error: ', error);
        throw new Error('Failed to extract text from PDF');
    }
};