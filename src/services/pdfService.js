const ejs = require('ejs');
const { resolve } = require('path')

class pdfService{
    async gerarPDF(doc){
        try {
           const response = ejs.renderFile(resolve(__dirname, '..', 'public', 'pdf.ejs'),{doc})
            return response;  
            
        } catch (error) {
            throw new Error('Erro ao gerar PDF!', error)
        }
    }
}

module.exports = new pdfService();