const ejs = require('ejs');
const { resolve } = require('path')

class pdfService{
    async gerarPDF(numeros){
        console.log("nuemros", numeros)
        try {
           const response = ejs.renderFile(resolve(__dirname, '..', 'public', 'pdf.ejs'),{numeros})
            return response;  
            
        } catch (error) {
            throw new Error('Erro ao gerar PDF!', error)
        }
    }
}

module.exports = new pdfService();